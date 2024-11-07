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
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [HeaderComponent, FooterComponent, NotificationComponent, CommonModule, FormsModule]
})
export class RegisterComponent {
  user: User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    specialty: "",
    phone: "",
    role: "user",
    profileImage: ""
  };
  
  notificationMessage: string = '';
  showNotification: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  registerUser() {
    this.userService.registerUser(this.user).subscribe({
      next: (response) => {
        this.notificationMessage = '¡Usuario registrado con éxito!';
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

  redirect_to(event: Event) {
    event.preventDefault();
    this.router.navigate(['/register-voluntary']);
  }
  // Función para limpiar el formulario
  clearForm() {
    this.user = {
      id: 0,
      name: "",
      email: "",
      password: "",
      specialty: "",
      phone: "",
      role: "user",
      profileImage: ""
    };
  }
}
