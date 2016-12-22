/* tslint:disable:no-unused-variable */

//create planet service - this file is for Unit testing planets.service.ts
//ng generate service shared/planets

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanetsService } from './planets.service';

describe('PlanetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsService]
    });
  });

  it('should ...', inject([PlanetsService], (service: PlanetsService) => {
    expect(service).toBeTruthy();
  }));
});
