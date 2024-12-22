import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundDocsComponent } from './background-docs.component';

describe('BackgroundDocsComponent', () => {
  let component: BackgroundDocsComponent;
  let fixture: ComponentFixture<BackgroundDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
