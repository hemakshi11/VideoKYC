import { Component,OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { empty } from 'rxjs';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}


  messageary:Array<{username:string, email: string, message:string}> =[];

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: [''],
      email:[''],
      message:['']
    });
  }

  onSubmit(){
    // localStorage.clear();
    if(localStorage.getItem('message')!=null){
      this.messageary=JSON.parse(localStorage.getItem('message')!);
    }else{
      this.messageary=[];
    }
    
  
    // console.log(this.myForm.value);
    
    this.messageary.push(this.myForm.value);

    // this.messageary.push(this.messageobj);
    // console.log(this.messageary);
    

    localStorage.setItem('message',JSON.stringify(this.messageary));

    
    console.log(this.messageary);
 
    



    // alert("Form submitted");
    this.myForm.reset()
  }
}
