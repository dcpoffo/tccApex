/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NaoConformidadeService } from './naoConformidade.service';

describe('Service: NaoConformidade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaoConformidadeService]
    });
  });

  it('should ...', inject([NaoConformidadeService], (service: NaoConformidadeService) => {
    expect(service).toBeTruthy();
  }));
});
