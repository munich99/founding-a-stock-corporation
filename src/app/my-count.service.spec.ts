/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyCountService } from './my-count.service';

describe('Service: MyCount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCountService]
    });
  });

  it('should ...', inject([MyCountService], (service: MyCountService) => {
    expect(service).toBeTruthy();
  }));
});
