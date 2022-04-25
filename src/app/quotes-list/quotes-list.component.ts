import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {
  data: any[] = []
  page: number = 1

  constructor(
    private quotesService: QuotesService
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
    this.quotesService.getQuotes(this.page)
    .subscribe((data: any) => {
      console.log(this.data)
      this.data = data
    })
  }
}
