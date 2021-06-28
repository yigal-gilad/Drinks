import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from "../http.service";
import { StateService } from "../state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: any;
  constructor(public state: StateService, public http: HttpService) { }

  ngOnInit() {
    this.getData();
  }

ngOnDestroy() {
  this.subscription.unsubscribe();
}

  getData() {
    this.subscription = this.http.getRandomData()
      .subscribe({
        next: data => {
          this.state.state.random_item = data.drinks[0];
        },
        error: error => {
          alert(error.error);

        }
      })
  }

}
