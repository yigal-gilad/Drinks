import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(public state: StateService, public router: Router) { }

  ngOnInit() {
  }

  selectItem(index: number) {
    this.state.state.selected_item = this.state.state.api_results[index];
    this.router.navigate(['details'], { skipLocationChange: true });
  }

}
