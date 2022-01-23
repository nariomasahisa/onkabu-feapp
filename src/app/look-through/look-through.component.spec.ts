import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookThroughComponent } from './look-through.component';

describe('LookThroughComponent', () => {
  let component: LookThroughComponent;
  let fixture: ComponentFixture<LookThroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookThroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookThroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
