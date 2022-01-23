import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { from, Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMobile$: Observable<boolean> = of(false);
  constructor(private breakPointObserver:BreakpointObserver){}

  public ngOnInit(){
    this.isMobile$ = this.breakPointObserver.observe(Breakpoints.XSmall).pipe(
      map((state: BreakpointState) => state.matches)
    )
  }
}
