import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ToDoComponent } from './pages/to-do/to-do.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {path:"main", component: MainComponent},
      {path:"to-do", component: ToDoComponent},
      {path:"**", redirectTo:"main"},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
