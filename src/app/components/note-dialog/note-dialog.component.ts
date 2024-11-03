import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './note-dialog.component.html',
  styleUrl: './note-dialog.component.scss'
})
export class NoteDialogComponent {
  noteTitle: string = '';
  noteContent: string = '';
  userImage: string | null = null;

  constructor(private dialogRef: MatDialogRef<NoteDialogComponent>) {}

  saveNote(): void {
    this.dialogRef.close({
      title: this.noteTitle,
      content: this.noteContent,
      image: this.userImage
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  // Método para cargar una imagen
  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
