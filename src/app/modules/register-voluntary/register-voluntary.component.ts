import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NotificationComponent } from '../../components/notification/notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-voluntary',
  standalone: true,
  templateUrl: './register-voluntary.component.html',
  styleUrls: ['./register-voluntary.component.scss'],
  imports: [HeaderComponent, FooterComponent, NotificationComponent, CommonModule, FormsModule]
})
export class RegisterVoluntaryComponent {
  psychologist: User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    specialty: "",
    phone: "",
    role: "voluntary",
    profileImage: ""
  };
  
  notificationMessage: string = '';
  showNotification: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  registerPsychologist() {
    this.userService.registerUser(this.psychologist).subscribe({
      next: (response) => {
        this.notificationMessage = '¡Voluntario registrado con éxito!';
        this.showNotification = true;
        this.clearForm(); // Limpiar el formulario
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: (err) => {
        this.notificationMessage = 'Error en el registro. Inténtalo de nuevo.';
        this.showNotification = true;
      }
    });
  }

  // Función para limpiar el formulario
  clearForm() {
    this.psychologist = {
      id: 0,
      name: "",
      email: "",
      password: "",
      specialty: "",
      phone: "",
      role: "psychologist",
      profileImage: ""
    };
  }
}
