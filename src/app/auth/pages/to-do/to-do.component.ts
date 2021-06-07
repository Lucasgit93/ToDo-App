import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {




  taskList: string[] = [];

  
  
  constructor() {}

  ngOnInit(): void {
   const local = JSON.parse(localStorage.getItem("task") || '');
    this.taskList.push(local);
  }
  
  
  public saveFile(userInput: string): void {


    this.taskList.push(userInput);

    
      localStorage.setItem("task", JSON.stringify(userInput));
      
      
    
  }
  

  eraseTask(i: number){
    this.taskList.splice(i, 1);
  }

  
}
