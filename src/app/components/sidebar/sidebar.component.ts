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
}
