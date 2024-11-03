import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';
  private currentUser: User | null = null; // Para almacenar el usuario autenticado

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login/`, { email, password });
  }

  // Método para recuperar el usuario autenticado
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/`); // Endpoint para obtener los detalles del usuario
  }

  // Método para establecer el usuario actual en el cliente
  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  // Método para obtener el usuario actual desde el cliente
  getUser(): User | null {
    return this.currentUser;
  }

  // Método para cerrar sesión
  logout(): void {
    this.currentUser = null; // Limpia el usuario actual
  }
}
