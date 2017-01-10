//create planet service
//ng generate service shared/planets

import { Injectable } from '@angular/core';
import { Planets } from './planets';

//import planet models
import { Mercury } from './Planets/Mercury';
import { Venus } from './Planets/Venus';
import { Earth } from './Planets/Earth';
import { Mars } from './Planets/Mars';
import { Jupiter } from './Planets/Jupiter';
import { Saturn } from './Planets/Saturn';
import { Uranus } from './Planets/Uranus';
import { Neptune } from './Planets/Neptune';

@Injectable()
export class PlanetsService {

  constructor() { }

  getPlanets(): Promise<Planets[]>{
    return Promise.resolve(PLANETSDATA);
  }

  setDefaultPlanet(): Promise<Planets>{
    return Promise.resolve(PLANETSDATA.filter(planet => planet.position == 1)[0]);
  }
}

const PLANETSDATA: Planets[] = [
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune
  ]
