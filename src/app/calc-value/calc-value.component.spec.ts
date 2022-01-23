import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcValueComponent } from './calc-value.component';

describe('CalcValueComponent', () => {
  let component: CalcValueComponent;
  let fixture: ComponentFixture<CalcValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
