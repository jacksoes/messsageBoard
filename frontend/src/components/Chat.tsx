import "./Chat.css"

const Chat = () =>{
    return(
    <div className="container">

        <div className="chat-display">
            <span className="text-content">Jack: i am typing in the chat</span>
            <br/>
            <br/>
            <span className="text-content">User2: i am also typign in chat</span>
            
         
            
        </div>
        
        <div className="chat-input-container">

            <input className="chat-input"></input>

            <button className="chat-button">Chat</button>
        </div>
        
        
    </div>
)
}

export default Chat;