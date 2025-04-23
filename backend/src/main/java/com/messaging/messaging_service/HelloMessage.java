package com.messaging.messaging_service;

import java.util.ArrayList;

public class HelloMessage {

    private ArrayList<String> list = new ArrayList<>();

    private String name;
    private String message;

    public HelloMessage() {
    }
  
    public HelloMessage(String name, String message) {
      this.name = name;
      this.message = message;
    }
  
    public String getName() {
      return name;
    }
  
    public void setName(String name) {
      this.name = name;
    }

    public String getMessage() {
      return message;
    }
  
    public void setMessage(String message) {
      this.message = message;
    }
    
}
