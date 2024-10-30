import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { HeaderFeedComponent } from '../../components/header-feed/header-feed.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { PublicationCardComponent } from '../../components/publication-card/publication-card.component';
import { PublicationService } from '../../services/publication.service';
import { Publication } from '../../models/publication';
import { PublicationDialogComponent } from '../../components/publication-dialog/publication-dialog.component'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [HeaderFeedComponent, SidebarComponent, PublicationCardComponent, CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  publications: Publication[] = []; // Array para almacenar las publicaciones

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
}
