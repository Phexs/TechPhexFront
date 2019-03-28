import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'TechPhex';
    onClick($event){
    
    console.log(onclick);
    const x = document.getElementById("hideBlock");
    if(x.style.display === "none"){
      x.style.display = "block";
    }else{
      x.style.display = "none";
    }
  }
 
}