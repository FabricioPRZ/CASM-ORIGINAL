import { Component, input, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-siderbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-siderbar.component.html',
  styleUrl: './chat-siderbar.component.scss'
})
export class ChatSiderbarComponent {
  @Output() chatSelected = new EventEmitter<any>();

  chats = [
    { id: 1, name: 'Chat 1',  lastMessage: 'Hola' },
    { id: 2, name: 'Chat 2',   lastMessage: 'Como estas?' },
  ];

  selectChat(chat: any){
    this.chatSelected.emit(chat);
  }
}
