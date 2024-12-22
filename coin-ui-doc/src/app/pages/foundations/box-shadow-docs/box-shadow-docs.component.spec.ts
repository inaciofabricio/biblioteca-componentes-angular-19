import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShadowDocsComponent } from './box-shadow-docs.component';

describe('BoxShadowDocsComponent', () => {
  let component: BoxShadowDocsComponent;
  let fixture: ComponentFixture<BoxShadowDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxShadowDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxShadowDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
