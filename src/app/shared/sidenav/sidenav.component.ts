import { Component } from '@angular/core';


interface Route{
  text: string;
  route: string;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [`
  ul{
  
  }
  li{
    cursor:pointer;
    z-index: 99;
  }
  `
  ]
})
export class SidenavComponent {


    links: Route[] =[
      {
        text: 'Main',
        route: '/app/main'
      },
      {
        text: 'To-Do List',
        route: '/app/to-do'
      }
    ]





}
