import { TestBed } from '@angular/core/testing';

import { CoinUiService } from './coin-ui.service';

describe('CoinUiService', () => {
  let service: CoinUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
