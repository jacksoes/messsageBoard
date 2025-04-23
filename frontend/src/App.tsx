

import { useRef, useEffect } from 'react'
import { RxStomp } from '@stomp/rx-stomp'

import SockJS from "sockjs-client"



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

  
  const rxStompRef = useRef(new RxStomp())
  const rxStomp = rxStompRef.current

  
  useEffect(() => {
    rxStomp.configure(rxStompConfig)
    rxStomp.activate()
  
    const sub = rxStomp.watch('/topic/greetings').subscribe(message => {
      console.log('Message from server:', message.body)
    })
  
    // Optional test message
    rxStomp.publish({
      destination: '/app/hello',
      body: JSON.stringify({ name: 'Jack' })
    })
  
    return () => {
      sub.unsubscribe()
      rxStomp.deactivate()
    }
  }, [])
  

  
  return (
    <>
      <h1>Hello RxStomp!</h1>
    </>
  )
}

export default App