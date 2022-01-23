import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnkabuComponent } from './onkabu.component';

fdescribe('OnkabuComponent', () => {
  let component: OnkabuComponent;
  let fixture: ComponentFixture<OnkabuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnkabuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnkabuComponent);
    component = fixture.componentInstance;
    component.nowPrice = 200;
    component.buyPrice = 100;
    component.profit = component.nowPrice - component.buyPrice;
    component.stocks = 100;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component.calcOnkabu()).toBe(`30株保有で恩株になります`);
  });
});
