import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'q-details',
  templateUrl: './q-details.component.html',
  styleUrls: ['./q-details.component.scss']
})
export class QDetailsComponent implements OnInit {
  details: any = []
  id: number = 0

  constructor(
    private quotesService: QuotesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.getDetails(this.id)
  }

  getDetails(id: number) {
    this.quotesService.getQuotesById(id)
    .subscribe((details: any) => {
      this.details = details
    })
  }

  eraseDetails() {
    this.details = 0
  }
}
