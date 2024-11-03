import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor (private router: Router){}

  redirect_to_login (event: Event){
    event.preventDefault();
    this.router.navigate(["/login"])
  }
  redirect_to_home (event: Event){
    event.preventDefault();
    this.router.navigate(["/home"])
  }
  redirect_to_about (event: Event){
    event.preventDefault();
    this.router.navigate(["/about"])
  }
}
