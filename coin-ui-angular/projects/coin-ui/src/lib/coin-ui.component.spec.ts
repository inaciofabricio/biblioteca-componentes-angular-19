import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinUiComponent } from './coin-ui.component';

describe('CoinUiComponent', () => {
  let component: CoinUiComponent;
  let fixture: ComponentFixture<CoinUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
