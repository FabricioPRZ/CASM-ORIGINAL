import { Component, Input } from '@angular/core';
import { PublicationCardComponent } from '../publication-card/publication-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [PublicationCardComponent, CommonModule],
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'] // Cambiado a styleUrls
})
export class FavoriteCardComponent {
  @Input() type!: string; // 'publication', 'psychologist', 'note'
  @Input() itemData!: any; // Ajusta el tipo según tu estructura de datos

  sendMessage(id: string) {
    // Lógica para enviar un mensaje al psicólogo
    console.log(`Enviar mensaje a: ${id}`);
  }
}
