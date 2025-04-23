package com.messaging.messaging_service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MessageService {
    private final List<Greeting> messages = new ArrayList<>();

    public void saveMessage(Greeting greeting) {
        if (messages.size() > 20){
            messages.clear();
        }
        messages.add(greeting);
    }

    public List<Greeting> getAllMessages() {
        return messages;
    }
}
