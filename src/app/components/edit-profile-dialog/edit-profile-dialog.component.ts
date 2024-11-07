import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile-dialog',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})

export class EditProfileDialogComponent {
  editProfileForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder,
    private userService: UserService // Se inyecta el servicio de usuario
  ) {
    // Inicialización del formulario con validación básica
    this.editProfileForm = this.fb.group({
      name: [data.name, [Validators.required]], // Añadido validación requerida
      email: [data.email, [Validators.required, Validators.email]], // Validación de email
      specialty: [data.specialty],
      phone: [data.phone, [Validators.required]], // Añadido validación
      profileImage: [data.profileImage]
    });
  }

  // Método para manejar la selección de imagen
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.editProfileForm.patchValue({ profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  // Método para guardar los cambios
  save() {
    if (this.editProfileForm.valid) {
      const formData = this.editProfileForm.value;
      if (formData.profileImage instanceof String) {
        // Si la imagen no se ha actualizado (es una cadena de texto existente)
        this.dialogRef.close(formData);
      } else {
        // Si hay una imagen nueva, entonces cargamos la imagen al servidor
        this.uploadProfileImage(formData.profileImage).then((imageUrl) => {
          // Después de cargar la imagen, cerramos el diálogo con la URL de la imagen
          formData.profileImage = imageUrl;
          this.dialogRef.close(formData);
        });
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  // Método para cargar la imagen
  async uploadProfileImage(file: string | ArrayBuffer) {
    // Si la imagen es un File (en formato base64)
    const formData = new FormData();
    const blob = this.dataURLtoBlob(file as string);
    formData.append('file', blob, 'profile-image.png'); // Nombre del archivo
    try {
      const uploadedImageUrl = await this.userService.uploadProfileImage(formData).toPromise();
      return uploadedImageUrl; // Regresamos la URL de la imagen subida
    } catch (error) {
      console.error('Error al subir imagen:', error);
      throw error;
    }
  }

  // Convertir imagen en base64 a Blob para el FormData
  dataURLtoBlob(dataURL: string) {
    // Verifica si la cadena contiene el prefijo y elimínalo
    const base64Index = dataURL.indexOf('base64,');
    if (base64Index !== -1) {
      dataURL = dataURL.substring(base64Index + 7); // Elimina 'base64,' de la cadena
    }
  
    // Decodifica la cadena base64
    const byteString = atob(dataURL);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
  
    // Crea el blob a partir del arrayBuffer
    return new Blob([arrayBuffer], { type: 'image/png' });
  }
  

  // Método para cerrar el diálogo sin guardar cambios
  close() {
    this.dialogRef.close();
  }
}