const express = require("express"); //import express-runs the HTTP server;cors-to call the server from any other origin
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "bd9d6a98-bb6b-4c55-9372-e4a133aa4834"}}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});
app.listen(3001);