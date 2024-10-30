import { Component } from '@angular/core';
import { HeaderFeedComponent } from '../../components/header-feed/header-feed.component';
import { DirectoryCardComponent } from '../../components/directory-card/directory-card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [HeaderFeedComponent, DirectoryCardComponent, SidebarComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.scss'
})
export class DirectoryComponent {

}
