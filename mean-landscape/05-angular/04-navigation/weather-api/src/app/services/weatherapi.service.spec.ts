import { TestBed } from '@angular/core/testing';

import { WeatherapiService } from './weatherapi.service';

describe('WeatherapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherapiService = TestBed.get(WeatherapiService);
    expect(service).toBeTruthy();
  });
});
