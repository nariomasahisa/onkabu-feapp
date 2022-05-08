import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { ICompany } from 'src/app/voes/i-company';
import { MOCKDATA } from './datas';

enum Action {
  CREATE = 'create',
  EDIT = 'edit',
  DETAIL = 'detail'
}


@Component({
  selector: 'app-look-through',
  templateUrl: './look-through.component.html',
  styleUrls: ['./look-through.component.scss']
})

export class LookThroughComponent implements OnInit {
  
  public displayedColumns: string[] = [
    'name',
    'stock',
    'buyPrice',
    'eps',
    'bps',
    'buyAll',
    'profits',
    'assets'
  ];
  public dataSource = [];
  public inputDataForm!: FormGroup;
  public inputDataArray!: FormArray;


  @ViewChild(MatTable) table!: MatTable<ICompany>

  public action = Action.DETAIL
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.inputDataArray = this.fb.array([]);
    this.inputDataForm = this.fb.group({formArray: this.inputDataArray});
  }


  public addForm(): void {

  }

  public removeForm(): void {

  }

  public toCreate(): void {
    this.action = Action.CREATE;
  }
  public toDetail(): void {
    this.action = Action.DETAIL;
  }

  public toEdit(): void {
    this.action = Action.EDIT;
  }

  public isCreate(): boolean {
    return this.action === Action.CREATE;
  }

  public isEdit(): boolean {
    return this.action === Action.EDIT;
  }

  public isDetail(): boolean {
    return this.action === Action.DETAIL;
  }

}
