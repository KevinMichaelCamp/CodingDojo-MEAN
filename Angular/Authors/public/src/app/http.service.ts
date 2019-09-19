import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get('/authors');
  }

  getAuthor(id: string) {
    return this.http.get(`/authors/${id}`);
  }

  createAuthor(newAuthor: object) {
    return this.http.post('/authors', newAuthor);
  }

  updateAuthor(id: string, newAuthor: object) {
    return this.http.put(`/authors/${id}`, newAuthor);
  }

  deleteAuthor(id: string) {
    return this.http.delete(`/authors/${id}`);
  }
}
