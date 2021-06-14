import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles:[`
  .container-fluid{
   background: linear-gradient(to top,  #0575e6, #021b79);
   height: 60px;
    text-align: center;
    padding-top: 7px;
    color: #D9D9D9;
    font-family: 'Kumbh Sans', sans-serif;
  }
  h1{
    font-size: 40px;
    padding-top: 6px;
  }

  @media only screen and (max-width:400px){
    .container-fluid{
      width: 110%;
    }
  }
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
