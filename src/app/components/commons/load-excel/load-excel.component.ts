import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-excel',
  templateUrl: './load-excel.component.html',
  styleUrls: ['./load-excel.component.scss']
})
export class LoadExcelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  /**
   * 
   * @param event ファイルアップロード時に発動
   * @returns 
   */
  public importFile(event: Event): void {
    
  }

}
