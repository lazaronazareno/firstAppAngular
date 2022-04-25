import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  data: any[] = []


  constructor( 
    private http: HttpClient
  ) { }

  getQuotes(page: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/?_page=${page}&_limit=20`)
  }

  getQuotesById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
