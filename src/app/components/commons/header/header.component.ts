import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "チョモランマ";
  constructor() { }

  ngOnInit(): void {

  }
  /**
   * openSignUpWindow
   */
  public openSignUpWindow() {
    const url = 'sign-up'
    const _window = window.open(
      url
    )
  }

}
