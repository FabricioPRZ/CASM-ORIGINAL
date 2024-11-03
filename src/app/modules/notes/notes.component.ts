import { Component } from '@angular/core';
import { HeaderFeedComponent } from "../../components/header-feed/header-feed.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NoteDialogComponent } from '../../components/note-dialog/note-dialog.component';
import { Note } from '../../models/note';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [HeaderFeedComponent, FooterComponent, NoteCardComponent, SidebarComponent, NoteDialogComponent, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  notes: Note[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    // Aquí puedes cargar las notas desde un servicio o API
    this.notes = [
      { title: 'Nota 1', content: 'Contenido de la nota 1' },
      { title: 'Nota 2', content: 'Contenido de la nota 2' },
      { title: 'Nota 3', content: 'Contenido de la nota 3' }
    ];
  }

  openNoteDialog(): void {
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notes.push(result);
      }
    });
  }
}
