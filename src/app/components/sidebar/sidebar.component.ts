import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor (private router: Router){}

  redirect_to_favorites (event: Event){
    event.preventDefault();
    this.router.navigate(["/favorites"])
  }
  redirect_to_feed (event: Event){
    event.preventDefault();
    this.router.navigate(["/feed"])
  }
  redirect_to_chat (event: Event){
    event.preventDefault();
    this.router.navigate(["/chat"])
  }
  redirect_to_notes (event: Event){
    event.preventDefault();
    this.router.navigate(["/notes"])
  }
}
