import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl,FormArray, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   public form 			: FormGroup;



   constructor(private formBuilder: FormBuilder,
               public router: Router) 
   { 
      this.form = this.formBuilder.group({
        mobile: this.formBuilder.array([
          this.mobile()
        ])
      });

   }

  mobile(): FormGroup
  {
    return this.formBuilder.group({
      phone: new FormControl([''])
    });
  }

  getmobileinfo(): FormArray
  {
    return this.form.get('mobile') as FormArray;
  }

   addNewInputField()
   {
      this.getmobileinfo().push(this.mobile());
   }

   removeInputField(index)
   {
       this.getmobileinfo().removeAt(index);
   }

   manage()
   {
      console.dir(this.form.value.mobile);
   }

   next(){
     this.router.navigate(['page3']);
   }
   back(){
    this.router.navigate(['page1']);
  }



}
