import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonnaSpinnerPocComponent } from './jonna-spinner-poc.component';

describe('JonnaSpinnerPocComponent', () => {
  let component: JonnaSpinnerPocComponent;
  let fixture: ComponentFixture<JonnaSpinnerPocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JonnaSpinnerPocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JonnaSpinnerPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
