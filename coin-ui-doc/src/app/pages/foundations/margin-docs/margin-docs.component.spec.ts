import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginDocsComponent } from './margin-docs.component';

describe('MarginDocsComponent', () => {
  let component: MarginDocsComponent;
  let fixture: ComponentFixture<MarginDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarginDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarginDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
