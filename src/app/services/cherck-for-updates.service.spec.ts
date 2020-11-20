import { TestBed } from '@angular/core/testing';

import { CherckForUpdatesService } from './cherck-for-updates.service';

describe('CherckForUpdatesService', () => {
  let service: CherckForUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CherckForUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
