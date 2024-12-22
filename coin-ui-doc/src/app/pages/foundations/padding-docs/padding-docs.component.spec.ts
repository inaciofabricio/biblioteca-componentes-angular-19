import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddingDocsComponent } from './padding-docs.component';

describe('PaddingDocsComponent', () => {
  let component: PaddingDocsComponent;
  let fixture: ComponentFixture<PaddingDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaddingDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaddingDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
