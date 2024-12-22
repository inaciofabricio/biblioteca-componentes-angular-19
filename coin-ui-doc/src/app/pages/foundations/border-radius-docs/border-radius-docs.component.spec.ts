import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderRadiusDocsComponent } from './border-radius-docs.component';

describe('BorderRadiusDocsComponent', () => {
  let component: BorderRadiusDocsComponent;
  let fixture: ComponentFixture<BorderRadiusDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderRadiusDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderRadiusDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
