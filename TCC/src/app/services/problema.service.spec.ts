/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProblemaService } from './problema.service';

describe('Service: Problema', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemaService]
    });
  });

  it('should ...', inject([ProblemaService], (service: ProblemaService) => {
    expect(service).toBeTruthy();
  }));
});
