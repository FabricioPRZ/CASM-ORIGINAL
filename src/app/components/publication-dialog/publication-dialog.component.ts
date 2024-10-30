import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PublicationService } from '../../services/publication.service';
import { Publication } from '../../models/publication';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publication-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './publication-dialog.component.html',
  styleUrls: ['./publication-dialog.component.scss']
})
export class PublicationDialogComponent {
  description: string = '';
  image: string = '';
  user_id: number = 1;

  constructor(
    public dialogRef: MatDialogRef<PublicationDialogComponent>,
    private publicationService: PublicationService
  ) {}

  onSubmit(): void {
    const publication: Publication = {
      id: 0,
      user_id: this.user_id,
      user_name: "Nombre del Usuario",
      description: this.description,
      image: this.image,
    };

    this.publicationService.createPublication(publication).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Error al crear la publicación:', err);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
