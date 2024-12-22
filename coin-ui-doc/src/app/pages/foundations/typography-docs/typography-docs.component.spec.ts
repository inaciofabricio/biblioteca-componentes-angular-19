import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyDocsComponent } from './typography-docs.component';

describe('TypographyDocsComponent', () => {
  let component: TypographyDocsComponent;
  let fixture: ComponentFixture<TypographyDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypographyDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
