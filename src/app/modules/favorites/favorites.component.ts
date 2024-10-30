import { Component } from '@angular/core';
import { HeaderFeedComponent } from "../../components/header-feed/header-feed.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { FavoriteCardComponent } from '../../components/favorite-card/favorite-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [HeaderFeedComponent, FooterComponent, SidebarComponent, FavoriteCardComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favoriteItems = [
    {
      type: 'psychologist',
      itemData: {
        photo_profile: 'psicologo1.png',
        user_name: 'Dr. Ana López',
        description: 'Psicóloga clínica',
        phone: '123-456-7890',
        email: 'ana.lopez@example.com',
        id: '1'
      }
    },
    {
      type: 'psychologist',
      itemData: {
        photo_profile: 'psicologo2.png',
        user_name: 'Dr. Luis Pérez',
        description: 'Psicólogo organizacional',
        phone: '987-654-3210',
        email: 'luis.perez@example.com',
        id: '2'
      }
    }
  ];
}
