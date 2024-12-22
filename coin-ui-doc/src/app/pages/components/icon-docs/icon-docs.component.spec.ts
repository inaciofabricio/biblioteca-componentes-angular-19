import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDocsComponent } from './icon-docs.component';

describe('IconDocsComponent', () => {
  let component: IconDocsComponent;
  let fixture: ComponentFixture<IconDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
