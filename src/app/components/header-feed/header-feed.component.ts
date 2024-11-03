import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-feed',
  standalone: true,
  imports: [],
  templateUrl: './header-feed.component.html',
  styleUrl: './header-feed.component.scss'
})
export class HeaderFeedComponent {
  constructor (private router: Router){}

  redirect_to_directory (event: Event){
    event.preventDefault();
    this.router.navigate(["/directory"])
  }
  redirect_to_feed (event: Event){
    event.preventDefault();
    this.router.navigate(["/feed"])
  }
}
