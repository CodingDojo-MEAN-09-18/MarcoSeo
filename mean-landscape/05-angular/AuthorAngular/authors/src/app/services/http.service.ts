import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}
  selected: any;
  getAuthors() {
    return this.http.get('/authors');
  }

  newAuthor(name) {
    return this.http.post('/new', { name: name });
  }

  editAuthor(author) {
    console.log(author);
    return this.http.put('/edit', { id: author._id, name: author.name });
  }

  deleteAuthor(author) {
    console.log('deleting ', author);
    return this.http.delete('/delete/' + author._id);
  }
}
