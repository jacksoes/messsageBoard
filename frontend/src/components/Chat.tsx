import "./Chat.css";

const Chat = ({ chat, submitChat }) => {

    

    
  return (
    <div className="container">
      <div className="chat-display">

        {chat.map((item, index) => {

            let arr = item.content.split("@$#@")

            item = {role: arr[0], message: arr[1]}


             return (

          <div key={index}>
            <span className="text-content">
              {item.role + ": " + item.message}
            </span>
            <br />
            <br />
          </div>);
        })}
      </div>

        <form onSubmit={submitChat} className="chat-input-container">
        <input className="chat-input"></input>

        <button className="chat-button"  >Chat</button>
        </form>
    </div>
  );
};

export default Chat;
