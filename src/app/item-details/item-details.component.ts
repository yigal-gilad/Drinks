import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(public state: StateService, public router: Router) { }

  ngOnInit() {
  }

}
