import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDocsComponent } from './color-docs.component';

describe('ColorDocsComponent', () => {
  let component: ColorDocsComponent;
  let fixture: ComponentFixture<ColorDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
