import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './shared/planets.service';
import { Planets } from './shared/planets';

@Component({
  selector: 'Planets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'Planets works!';
  planetsList: Planets[] = [];
  constructor(private _planetservice: PlanetsService) {}

  ngOnInit(){
    this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }
}