import { Component, OnInit } from '@angular/core';
import { Planets } from './shared/planets';
import { PlanetsService } from './shared/planets.service';

@Component({
  selector: 'Planets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'Planets works!';
  planetsList: Planets[] = [];
  selectedPlanet: Planets = new Planets();
  constructor(private _planetservice: PlanetsService) {}

  ngOnInit(){
    this._planetservice.getPlanets().then(planets => this.planetsList = planets);
    this._planetservice.setDefaultPlanet().then(planet => this.selectedPlanet = planet);
  }

  showPlanetInfo(selplanet)
  {
    this.selectedPlanet = selplanet;
  }
}
