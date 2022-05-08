import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueResultComponent } from './value-result.component';

describe('ValueResultComponent', () => {
  let component: ValueResultComponent;
  let fixture: ComponentFixture<ValueResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
