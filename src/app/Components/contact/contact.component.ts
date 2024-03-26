import { Component,OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';



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
  messageary=[];
  messageobj={
    name:"",
    email:"",
    message:""
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: [''],
      email:[''],
      message:['']
    });
  }

  onSubmit(){
    this.messageobj.name=(this.myForm.value.username);
    this.messageobj.email=(this.myForm.value.email);
    this.messageobj.message=(this.myForm.value.message);
    // this.messageary.push(this.messageobj);
    // console.log(this.messageary);
    localStorage.setItem('message',JSON.stringify(this.messageobj));
    console.log(localStorage.getItem('message'));
    this.messageary.push(localStorage.getItem('message'));
    // this.messageary.push(JSON.parse(c));
    alert("Form submitted");
    this.myForm.reset()
  }
}
