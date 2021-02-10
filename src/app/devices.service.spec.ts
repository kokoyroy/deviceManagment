import { TestBed } from '@angular/core/testing';

import { DevicesService } from './Services/devices.service';

describe('DevicesService', () => {
  let service: DevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
