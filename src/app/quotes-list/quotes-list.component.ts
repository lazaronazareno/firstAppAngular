import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {
  data: any[] = []
  details: any = []
  page: number = 1
  id: number = 0

  constructor(
    private http: HttpClient
  ) { }
  
    nextPage() {
      this.page ++
      this.ngOnInit()
      console.log(this.page)
    }
  
    prevPage() {
      this.page --
      this.ngOnInit()
      console.log(this.page)
    }

  ngOnInit(): void {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/?_page=${this.page}&_limit=20`)
    .subscribe((data: any) => {
      this.data = data
    })
  }

  getDetails(id: number) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .subscribe((details: any) => {
      this.details = details
    })
  }

  eraseDetails() {
    this.details = 0
  }

}
