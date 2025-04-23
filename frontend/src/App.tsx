

import { useState, useRef, useEffect } from 'react'
import { RxStomp } from '@stomp/rx-stomp'
import SockJS from "sockjs-client"

import Chat from './components/Chat.tsx'
import Topic from './components/Topic.tsx'


import './App.css'


import type { RxStompConfig } from '@stomp/rx-stomp'


const rxStompConfig: RxStompConfig = {
  webSocketFactory: () => new SockJS('http://localhost:8080/gs-guide-websocket'),
  connectHeaders: {
    login: 'guest',
    passcode: 'guest',
  },
  debug: (msg) => {
    console.log(new Date(), msg)
  },
  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  reconnectDelay: 200,
}



function App() {
  let user = "user" + Math.floor(Math.random() * 101) ;
  const userRef = useRef(user);

 

  const [chat, setChat] = useState([]);

  const rxStompRef = useRef(new RxStomp())
  const rxStomp = rxStompRef.current

  
  useEffect(() => {
    rxStomp.configure(rxStompConfig)
    rxStomp.activate()
  
    const sub = rxStomp.watch('/topic/greetings').subscribe(message => {
      console.log(JSON.parse(message.body))
     

      setChat(JSON.parse(message.body))
      //
      user += "_" + Math.floor(Math.random() * 101) 

      
   })
  
    // Optional test message
   /*rxStomp.publish({
      destination: '/app/hello',
      body: JSON.stringify({ name: 'user1', message: "im typingsd in chwdadat" })
    })

    rxStomp.publish({
      destination: '/app/hello',
      body: JSON.stringify({ name: 'user2', message: "im typingsd in chat" })
    })*/
  
    return () => {
      sub.unsubscribe()
      rxStomp.deactivate()
    }
  }, [])


  const submitChat = (event) => {
    
      event.preventDefault();

      const messageText = event.target[0].value;

      // Optionally update user
      
    
      rxStomp.publish({
        destination: '/app/hello',
        body: JSON.stringify({
          name: userRef.current,
          message: messageText
        })
        
     })

      console.log(event.target[0].value)

    
       
  
       
        //


      
  
        
     

    
  }

  
  return (
    <>
      <div className='homepage'>
        <Topic />
        <Chat chat={chat} submitChat={submitChat} />
      </div> 
    </>
  )
}

export default App