import { TestBed } from '@angular/core/testing';

import { LogUpdatesService } from './log-updates.service';

describe('LogUpdatesService', () => {
  let service: LogUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
