import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDocsComponent } from './dialog-docs.component';

describe('DialogDocsComponent', () => {
  let component: DialogDocsComponent;
  let fixture: ComponentFixture<DialogDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
