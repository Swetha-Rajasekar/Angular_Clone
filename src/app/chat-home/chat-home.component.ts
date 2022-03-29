import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss']
})
export class ChatHomeComponent {

    conversation;
  
  
    onConversationSelected(conversation){
      this.conversation = conversation;
    }
  }
  
