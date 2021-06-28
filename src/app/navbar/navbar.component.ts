import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { StateService } from "../state.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public state: StateService, public http: HttpService, public router: Router) { }
  search: string;
  ngOnInit() {
  }

  searchButton(search: string) {
    this.search = "";
    this.getData(search);
  }

  searchInput(search: string) {
    if (search) {
      this.getData(search);
    }
  }

  getData(search: string) {
    this.http.getData(search)
      .subscribe({
        next: data => {
          if (data.drinks.length) {
            this.state.state.api_results = data.drinks;
            this.router.navigate(['results'], { skipLocationChange: true });
            window.scrollTo(0, 0)
          }
        },
        error: error => {
          alert(error.error);

        }
      })
  }
}
