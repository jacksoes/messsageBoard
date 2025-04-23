package com.messaging.messaging_service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {

  @Autowired
  private MessageService messageService;


  @MessageMapping("/hello") // gets message from /hello
  @SendTo("/topic/greetings") // sends message to everyone connected /topic/greetings
  public List<Greeting> greeting(HelloMessage message) throws Exception {
    Thread.sleep(1000); // simulated delay
    //return new Greeting("" + HtmlUtils.htmlEscape(message.getName()) + "@$#@" + HtmlUtils.htmlEscape(message.getMessage()));
      Greeting greeting = new Greeting(HtmlUtils.htmlEscape(message.getName()) + "@$#@" + HtmlUtils.htmlEscape(message.getMessage()));
      messageService.saveMessage(greeting);
      //return greeting;
      return messageService.getAllMessages();
  }


   @GetMapping("/messages")
    public List<Greeting> getMessages() {
        return messageService.getAllMessages();
    }

}