import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  user_input_name: string='';
  // messagestring: string='Please save username first to give feedback';
  public username = [];
  public form 			: FormGroup;
  //adddata: any[]=[];
  public cardcount = 0;
  public textareacount=0;

  constructor(public router: Router,
              public alertController: AlertController
              ) { }
  

  ngOnInit() {
  }

  async JsonAlert(n) {
    const alert = await this.alertController.create({
      header: "Data in Json Format",
      message: n,
      buttons: ['OK'],
      cssClass: "toast-design"
    });
  
    await alert.present();
  
  }


  createComponent(){
    //document.getElementById("content-container").insertAdjacentHTML("afterend","<form><ion-item><ion-input type='text' [(ngModel)]='user_input_name' placeholder='Enter name' [ngModelOptions]='{standalone: true}'></ion-input><ion-button (click)=save(user_input_name)>save</ion-button></ion-item></form>");
    //document.getElementById('content-container').insertAdjacentHTML("beforeend","<ion-card><form><ion-item><ion-input type='text' id='user-input-name' placeholder = 'Enter Name'></ion-input><ion-button id='btn'>save</ion-button></ion-item></form><div id='input-txt-div'style='margin-top: 10px;text-align: center;'><ion-button id='add-btn' type='button' slot='center' ><ion-icon name='add-outline'></ion-icon></ion-button></div></card>");
    var card_counter = this.cardcount;
    var textarea_counter = this.textareacount;
    var usernameArray = this.username;
    
    const card=document.createElement('ion-card');
    card.id="card-div"+this.cardcount.toString();

    const form=document.createElement('form');

    const item = document.createElement('ion-item');
    item.id='item-container'+this.cardcount.toString();



    const input = document.createElement('ion-input');
    input.type="text";
    input.placeholder="Enter Name";
    input.id="input-user"+this.cardcount.toString();
    input.value="";
    

    const button = document.createElement('ion-button');
    button.type="button";
    button.id="btn"+this.cardcount.toString();
    button.innerHTML="save";
    button.color='success';
    button.setAttribute('disabled','ture');
    
    

    const addbutton = document.createElement('ion-button');
    addbutton.id='add-btn'+this.cardcount.toString();
    addbutton.innerHTML = "<ion-icon name='add-outline'></ion-icon>";
    addbutton.type='submit';
    addbutton.color="secondary";
    addbutton.size="small";
    addbutton.setAttribute('disabled','true');

    var error_message = document.createElement('p');
    error_message.id='error-msg'+this.cardcount.toString();
    error_message.style.display='block';
    error_message.style.color='red';
    error_message.textContent='Please Enter name & save it first to give feedback';
    

    // const textarea = document.createElement('ion-textarea');
    // textarea.id="textarea"+this.count.toString();
    // textarea.placeholder="Message";
    

    document.getElementById('content-container').appendChild(card).appendChild(form).appendChild(item).appendChild(input);
    document.getElementById('content-container').appendChild(card).appendChild(form).appendChild(item).appendChild(button);
    document.getElementById('content-container').appendChild(card).appendChild(error_message);
    document.getElementById('content-container').appendChild(card).appendChild(addbutton);
    


    var savebtn = document.getElementById("btn"+this.cardcount.toString());
    let input_user_field = document.getElementById("input-user"+card_counter.toString());
    
    input_user_field.addEventListener("input", stateHandle);

    function stateHandle(){
      if((<HTMLInputElement>input_user_field.firstChild).value==="" || (<HTMLInputElement>input_user_field.firstChild).value===null){   
        savebtn.setAttribute('disabled','true');
        //error_message.style.display='block';
      }
      else{
        savebtn.setAttribute('disabled','false');
        // error_message.style.display='none';
      }
    };


    savebtn.addEventListener('click',save_user_name);
    function save_user_name(){
      {
        var input_text = document.getElementById("input-user"+card_counter.toString());
        //console.log(input_text);
        let names= {
         "id": input_text.parentElement.offsetParent.id ,
         "message": [],
         "person_name": (<HTMLInputElement>input_text.firstChild).value
       }
       usernameArray.push(names);
       //console.log(usernameArray);
       savebtn.setAttribute('disabled','true'); 
       addbutton.setAttribute('disabled','false');
       error_message.style.display='none';
       savebtn.innerHTML="saved";
       input_user_field.removeEventListener("input",stateHandle);
       // var disblebtn = document.getElementById("btn"+card_counter.toString());
       // disblebtn.setAttribute('disabled','true');      
   }
    }

    // this.username=usernameArray; // need to do this after
    // // console.log(this.username);
    // console.log(usernameArray);
    

   var addbtn= document.getElementById("add-btn"+this.cardcount.toString());

   addbtn.addEventListener('click',adding_message_field);
   function adding_message_field(){
    {
      
     
      var carddiv = document.getElementById("card-div"+card_counter.toString());
      //creating DOM div
      const textdiv= document.createElement('div');
      textdiv.id='text-div';
      ///style for text-div///////////
      const textdivstyle=document.createAttribute('style');
      textdivstyle.value="border: 1px solid";
      //appending syle inside text div////
      textdiv.setAttributeNode(textdivstyle);
  
      const textarea_savebtn = document.createElement('ion-button');
      textarea_savebtn.type="button";
      textarea_savebtn.id="message-btn-save"+textarea_counter.toString();
      textarea_savebtn.innerHTML="save";
      textarea_savebtn.color='success';
      textarea_savebtn.setAttribute('disabled','ture');
      textarea_savebtn.size="small";
      textarea_savebtn.slot="end";
  
      //style for textarea-savebtn
      const textarea_savebtnStyle = document.createAttribute('style');
      textarea_savebtnStyle.value = "display:flex; right: 0; bottom: 0";
      textarea_savebtn.setAttributeNode(textarea_savebtnStyle);
  
      //DOM creating ion-textarea dynamically
      const textarea = document.createElement('ion-textarea');
      textarea.id="text-area"+textarea_counter.toString();
      textarea.placeholder="Write Message here";
      
      //Appeding created Elements into HTML Document
      carddiv.appendChild(textdiv).appendChild(textarea);
      carddiv.appendChild(textdiv).appendChild(textarea_savebtn);
  
      //getting input_textarea_save button using id
      var save_textarea_btn = document.getElementById("message-btn-save"+textarea_counter.toString());
      //getting input_textarea using id
      let text_area_input = document.getElementById("text-area"+textarea_counter.toString());
  
      //adding eventlistner to input_textarea_field 
      text_area_input.addEventListener("input", text_area_handler);
  
      function text_area_handler(){
        if((<HTMLIonTextareaElement>text_area_input).textContent==="" || (<HTMLIonTextareaElement>text_area_input).textContent=== null){   
          save_textarea_btn.setAttribute('disabled','true');
          //console.log((<HTMLIonTextareaElement>text_area_input).textContent);
        }
        else{
          save_textarea_btn.setAttribute('disabled','false');
          //console.log((<HTMLIonTextareaElement>text_area_input).textContent);
        }
      }
  
  
      save_textarea_btn.addEventListener("click", save_text_area);
      function save_text_area(){
        //console.log((<HTMLIonTextareaElement>text_area_input));
        // console.log((<HTMLIonTextareaElement>text_area_input).textContent);
         
         var messages = {
           "id": text_area_input.id,
           "message" : (<HTMLIonTextareaElement>text_area_input).textContent
         };
        //var messages = (<HTMLIonTextareaElement>text_area_input).textContent;
        // console.log(messages);
         //console.log(usernameArray);  
         var iterator = usernameArray.values(); 

         for(let name of iterator){
           name.message.push(messages);
          //  console.log(name.person_name);
           var myJSON = JSON.stringify(name.person_name)+":"+JSON.stringify(name.message);
         }
        //  console.log(usernameArray);
         save_textarea_btn.setAttribute('disabled','true');
         save_textarea_btn.innerHTML="saved";
         //save_textarea_btn.style.display='none';
         text_area_input.removeEventListener("input", text_area_handler);
         console.log(myJSON);
         //this.JsonAlert(myJSON);
         alert(myJSON);
         
      }
  
      textarea_counter = textarea_counter+1;
  
     }
   }
   this.cardcount = this.cardcount+1;
  }
  next(){
    this.router.navigate(['home']);
  }

   back(){
    this.router.navigate(['page1']);
  }
  

  

}
