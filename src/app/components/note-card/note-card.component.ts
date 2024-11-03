import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss'
})
export class NoteCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() share = new EventEmitter<{ title: string, content: string }>();

  shareNote(): void {
    this.share.emit({ title: this.title, content: this.content });
  }
}
