import { Component } from '@angular/core';
import { HeaderFeedComponent } from "../../components/header-feed/header-feed.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeadComponent } from "../../components/head/head.component";
import { PublicationCardComponent } from '../../components/publication-card/publication-card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderFeedComponent, FooterComponent, HeadComponent, PublicationCardComponent, SidebarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
