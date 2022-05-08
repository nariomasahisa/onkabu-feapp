import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new CalcService();
    // service = TestBed.inject(CalcService);
  });

  it('for文のテスト', () => {
    expect(service.forMethod(250, 1)).toBe(2522);
  });

  it('成長なし計算メソッドの呼び出し', () => {
    expect(service.inputData(0.2, 250)).toHaveBeenCalledWith(service.nonGrowth(0.2, 250));
  });

  it('中成長計算メソッドの呼び出し', () => {
    expect(service.inputData(0.2, 250)).toHaveBeenCalledWith(service.middleGrowth(0.2, 250));
  });

  it('低成長計算メソッドの呼び出し', () => {
    expect(service.lowGrowth(0.2, 250)).toHaveBeenCalledWith(service.lowGrowth(0.2, 250));
  });

  it('高成長計算メソッドの呼び出し', () => {
    expect(service.highGrowth(0.2, 250)).toHaveBeenCalledWith(service.highGrowth(0.2, 250));
  });

  it('超過リターン計算', () => {
    expect(service.overReturnNowValue(0.1, 250, 1.00)).toBe(55);
  });
});
