import { Component, Input } from '@angular/core';
import { PublicationCardComponent } from '../publication-card/publication-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [PublicationCardComponent, CommonModule],
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent {
  @Input() type!: string; // 'publication', 'voluntary', 'note'
  @Input() itemData!: any;

  sendMessage(id: string) {
    // Lógica para enviar un mensaje al psicólogo
    console.log(`Enviar mensaje a: ${id}`);
  }
}