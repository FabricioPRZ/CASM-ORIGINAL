import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  standalone: true,
  imports: [],
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss']
})
export class PublicationCardComponent {
  @Input() photo_profile: string = '';
  @Input() user_name: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
