import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={"234a1637-b06a-451b-9f33-2670f0b5db63"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;