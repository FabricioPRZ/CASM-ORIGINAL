import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private apiUrl = 'http://localhost:8000/publications/';

  constructor(private http: HttpClient) {}

  // Crear una nueva publicación
  createPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(this.apiUrl, publication);
  }

  // Obtener todas las publicaciones
  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.apiUrl);
  }

  // Obtener una publicación por su ID
  getPublicationById(publicationId: number): Observable<Publication> {
    return this.http.get<Publication>(`${this.apiUrl}${publicationId}`);
  }

  // Actualizar una publicación
  updatePublication(publication: Publication): Observable<Publication> {
    return this.http.put<Publication>(`${this.apiUrl}${publication.id}`, publication);
  }

  // Eliminar una publicación
  deletePublication(publicationId: number): Observable<Publication> {
    return this.http.delete<Publication>(`${this.apiUrl}${publicationId}`);
  }
}
