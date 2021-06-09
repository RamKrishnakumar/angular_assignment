import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'protractor';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  user_input_name: string='';
  username = [];
  public form 			: FormGroup;

  constructor(public router: Router,
              //private formBuilder: FormBuilder
              ) { 
                // this.form = this.formBuilder.group({
                //   nameinfo: this.formBuilder.array([
                //     this.nameinfo()
                //   ])
                // });
              }
  

  ngOnInit() {
  }

  // nameinfo(): FormGroup
  // {
  //   return this.formBuilder.group({
  //     name: new FormControl([''])
  //   });
  // }

  // getnameinfo(): FormArray
  // {
  //   return this.form.get('nameinfo') as FormArray;
  // }

  // addNewInputField()
  //  {
  //     this.getnameinfo().push(this.nameinfo());
  //  }

  //  removeInputField(index)
  //  {
  //      this.getnameinfo().removeAt(index);
  //  }

  save(){
     
    let names= {
      id: Date.now(),
      person_name: document.getElementById('input-user').nodeValue,
    }
    this.username.push(names);
    console.log(this.username);
    console.warn('added', {names});
  }

  createComponentY(){
    document.getElementById('input-txt-div').insertAdjacentHTML("beforeend","<div><ion-item><ion-textarea placeholder='Enter more information here...'></ion-textarea><ion-button id='save-inputtext-btn'>save</ion-button></ion-item></div>");
  }
  
  


  createComponent(){
    //document.getElementById("content-container").insertAdjacentHTML("afterend","<form><ion-item><ion-input type='text' [(ngModel)]='user_input_name' placeholder='Enter name' [ngModelOptions]='{standalone: true}'></ion-input><ion-button (click)=save(user_input_name)>save</ion-button></ion-item></form>");
    document.getElementById('content-container').insertAdjacentHTML("beforeend","<ion-card><form><ion-item><ion-input type='text' id='user-input-name' placeholder = 'Enter Name'></ion-input><ion-button id='btn'>save</ion-button></ion-item></form><div id='input-txt-div'style='margin-top: 10px;text-align: center;'><ion-button id='add-btn' type='button' slot='center' ><ion-icon name='add-outline'></ion-icon></ion-button></div></card>");
     
    const input = document.createElement('ion-input');
    input.type="text";
    input.placeholder="Enter Name";
    input.id="input-user";

    const form=document.createElement('form');

    const card=document.createElement('ion-card');
    

    const button = document.createElement('ion-button');
    button.type="submit";
    button.id="btn";
    button.innerHTML="save";
    button.color='success';
    

    const addbutton = document.createElement('ion-button');
    addbutton.id='add-btn';
    addbutton.innerHTML = "<ion-icon name='add-outline'></ion-icon>";
    addbutton.type='submit';
    addbutton.slot='center';
    addbutton.expand='full';
    


    const item = document.createElement('ion-item');
    item.id='item-container';
    

    // document.getElementById('content-container').appendChild(card).appendChild(form).appendChild(item).appendChild(input);
    // document.getElementById('content-container').appendChild(card).appendChild(form).appendChild(item).appendChild(button);
    // document.getElementById('content-container').appendChild(card).appendChild(addbutton);
    

    
    document.addEventListener('DOMContentLoaded', ()=> {
      document.getElementById('btn').addEventListener('click', this.save)
      console.log(document.getElementById('btn'));
    });
    
    document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('add-btn').addEventListener('click', this.createComponentY)
    });

  }
  next(){
    this.router.navigate(['home']);
  }

  manage(val: any)
   {
      console.dir(val.nameinfo);
   }

   back(){
    this.router.navigate(['page1']);
  }
  

  

}
