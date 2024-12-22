import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderDocsComponent } from './border-docs.component';

describe('BorderDocsComponent', () => {
  let component: BorderDocsComponent;
  let fixture: ComponentFixture<BorderDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
