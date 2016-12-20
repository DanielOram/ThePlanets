/* tslint:disable:no-unused-variable */

//create planet service
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
