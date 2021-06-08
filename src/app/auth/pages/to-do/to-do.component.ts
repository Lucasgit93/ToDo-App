import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {




  taskList: string[] = [];
  dropMenu: boolean = false;
  
  
  constructor() {}

  ngOnInit(): void {
    const locals = JSON.parse(localStorage.getItem("task")!) || [];
    if (locals === []) {
      return;
    } else {
      for (const local of locals) {
        this.taskList.push(local); 
      }
      
    }

  }
  
  
  public saveFile(userInput: string): void {

  if (!userInput) {
    return;
  } else {
    this.taskList.push(userInput);
    
  }

    localStorage.setItem("task", JSON.stringify(this.taskList));
  }
  


  menu(){
  this.dropMenu = true;
  }

  eraseTask(i: number){

    this.taskList.splice(i, 1);

    localStorage.setItem("task", JSON.stringify(this.taskList));
  }


  
}
