import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  constructor(private router: Router) {}
  
  redirect_to_chat (event: Event){
    event.preventDefault();
    this.router.navigate(["/chat"])
  }
  redirect_to_configuration (event: Event){
    event.preventDefault();
    this.router.navigate(["/configuration"])
  }
}
