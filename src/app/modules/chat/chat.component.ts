import { Component } from '@angular/core';
import { HeaderFeedComponent } from "../../components/header-feed/header-feed.component";
import { ChatSiderbarComponent } from "../../components/chat-siderbar/chat-siderbar.component";
import { ChatWindowsComponent } from "../../components/chat-windows/chat-windows.component";
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderFeedComponent, ChatSiderbarComponent, ChatWindowsComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  selectedChat: any;
  currentUser: User = { 
    id: 1, 
    name: 'Juan Pérez', 
    email: 'juan.perez@example.com', 
    password: '', 
    specialty: '', 
    phone: '123456789', 
    role: 'user',
    profileImage: ''
  };
  isChatWindowOpen: boolean = false;

  onChatSelected(chat: any) {
    this.selectedChat = chat;
    this.isChatWindowOpen = true; // Cambia a modo ventana de chat
  }

  closeChatWindow() {
    this.isChatWindowOpen = false; // Vuelve a la lista de chats
  }
}
