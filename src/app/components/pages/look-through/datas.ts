import { ICompany } from "src/app/voes/i-company";

export const MOCKDATA: ICompany[] = [
  {
    name:'良品計画',
    stock: 500,
    buyPrice: 2207,
    eps: 128.9,
    bps: 806.75,
    buyAll: 500 * 2207,
    profits: 128.9 * 500,
    assets: 500 * 806/75
  },
  {
    name:'JACリクルートメント',
    stock: 400,
    buyPrice: 1164,
    eps: 44.73,
    bps: 346.76,
    buyAll: 400 * 1164,
    profits: 400 * 44.73,
    assets: 400 * 346.76
  },
  {
    name:'田中建設工業',
    stock: 100,
    buyPrice: 2155,
    eps: 225.83,
    bps: 1099.35,
    buyAll: 100 * 2155,
    profits: 100 * 1099.35,
    assets: 100 * 806/75
  },
  {
    name:'Ciメディカル',
    stock: 4,
    buyPrice: 5633,
    eps: 292.09,
    bps: 1375.49,
    buyAll: 4 * 5633,
    profits: 4 * 292.09,
    assets: 4 * 1375.49
  },
  {
    name: 'ウォンテッドリー',
    stock: 1100,
    buyPrice: 2032,
    eps: 25.09,
    bps: 137.82,
    buyAll: 1100 * 2032,
    profits: 1100 * 25.09,
    assets: 1100 * 137.81
  },
  {
    name: 'ロジザード',
    stock: 700,
    buyPrice: 1978,
    eps: 67.75,
    bps: 410.04,
    buyAll: 700 * 1978,
    profits: 700 * 67.75,
    assets: 700 * 410.04
  },
  {
    name:'ソフトバンクグループ',
    stock: 100,
    buyPrice: 6883,
    eps: 2437.29,
    bps: 5588.8,
    buyAll: 688300,
    profits: 243729,
    assets: 558880
  }
]