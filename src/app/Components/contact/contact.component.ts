import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NgModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

   messagelist=[];

  //  onClick(message: any){
  //   console.log (message);

  //  }


  submit(){
    console.log("submit");
  }


  // saveMessage() {
  //   let data = { name: 'hello' };
  //   localStorage.setItem('msg', JSON.stringify(data));
  // }
}
