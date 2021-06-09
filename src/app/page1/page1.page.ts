import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  option:any;
  slected:any;
  menuType=[{no: 82},{no: 73},{no: 80},{no: 91}];

  constructor(public toastController: ToastController,
              public alertController: AlertController,
              public loadingController: LoadingController,
              private router: Router) { }

  ngOnInit() {
    console.log(this.menuType);
  }

  async correct(n) {
    const alert = await this.alertController.create({
      header: n,
      message: 'Correct Answer',
      buttons: ['OK'],
      cssClass: "toast-design"
    });
  
    await alert.present();
  
  }

  async wrong(n) {
    const alert = await this.alertController.create({
      header: n,
      message: 'Wrong! 82 is the Correct ans',
      buttons: ['OK'],
      cssClass: "toast-design"
    });
  
    await alert.present();
  
  }
  async invalid() {
    const alert = await this.alertController.create({
      header: 'Invalid option',
      message: 'choose inbetween 1 to 4',
      buttons: ['OK'],
      cssClass: "toast-design"
    });
  
    await alert.present();
  
  }

  async submit() {
    const loading = await this.loadingController.create({
      message: 'Submitting',
      translucent: true,
    });
    await loading.present();
    if(this.option>=1 && this.option<=4){
      if(this.option==1){
        this.slected = 82;
        this.correct(this.slected);
        loading.dismiss();
      }
      else if(this.option==2){
        this.slected=73;
        this.wrong(this.slected);
        loading.dismiss();
      }
      else if(this.option==3){
        this.slected=80;
        this.wrong(this.slected);
        loading.dismiss();
      }
      else if(this.option==4){
        this.slected=90;
        this.wrong(this.slected);
        loading.dismiss();
      }
    }
    else{
      this.invalid();
      loading.dismiss();
    }
  }

  next(){
    this.router.navigate(['page2']);
  }

}
