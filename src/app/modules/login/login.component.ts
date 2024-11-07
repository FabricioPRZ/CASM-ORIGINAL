import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, NotificationComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  notificationMessage: string = '';
  showNotification: boolean = false;
  notificationType:  string = '';

  constructor(private router: Router, private userService: UserService) {}

  // Función para manejar el inicio de sesión
  loginUser() {
    const user: User = {
      id: 0,
      name: '',
      email: this.email,
      password: this.password,
      specialty: '',
      phone: '',
      role: '',
      profileImage: ''
    };

    // Aquí se implementa el método de inicio de sesión del UserService
    this.userService.loginUser(user).subscribe({
      next: (response) => {
        // Manejo de la respuesta exitosa
        this.notificationMessage = '¡Inicio de sesión exitoso!';
        this.showNotification = true;
        setTimeout(() => {
          this.router.navigate(['/feed']); // Redirigir después del inicio de sesión
        }, 3000);
      },
      error: (err) => {
        // Manejo de errores
        this.notificationMessage = 'Error en el inicio de sesión. Inténtalo de nuevo.';
        this.showNotification = true;
      }
    });
  }

  redirect_to_register(event: Event) {
    event.preventDefault();
    this.router.navigate(["/register"]);
  }

  redirect_to_register_voluntary(event: Event) {
    event.preventDefault();
    this.router.navigate(["/register-voluntary"]);
  }
}
