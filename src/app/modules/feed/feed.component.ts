import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { HeaderFeedComponent } from '../../components/header-feed/header-feed.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { PublicationCardComponent } from '../../components/publication-card/publication-card.component';
import { PublicationService } from '../../services/publication.service';
import { Publication } from '../../models/publication';
import { PublicationDialogComponent } from '../../components/publication-dialog/publication-dialog.component';
import { NoteCardComponent } from '../../components/note-card/note-card.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [HeaderFeedComponent, SidebarComponent, PublicationCardComponent, CommonModule,  NoteCardComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  publications: Publication[] = []; // Array para almacenar las publicaciones
  notes: { title: string; content: string }[] = [ // propiedad notes
    { title: 'Nota 1', content: 'Contenido de la nota 1' },
    { title: 'Nota 2', content: 'Contenido de la nota 2' }
  ];

  constructor(private publicationService: PublicationService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPublications(); // Cargar publicaciones al inicializar el componente
  }

  loadPublications(): void {
    this.publicationService.getPublications().subscribe((data: Publication[]) => {
      this.publications = data; // Asignar las publicaciones a la variable local
    });
  }

  openPublicationDialog(): void {
    const dialogRef = this.dialog.open(PublicationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPublications(); // Recargar publicaciones al crear una nueva
      }
    });
  }

  onShare(note: { title: string; content: string}): void{
    const newPublication: Publication = {
      id: 0,
      user_id: 1,
      user_name: 'nombre de  usuario',
      description: note.content,
      image: ''
  };

  this.publicationService.createPublication(newPublication).subscribe({
    next: () => this.loadPublications(),
    error: (err) =>  console.error('Error al compartir la nota en el  feed', err),
    });
  }
}
