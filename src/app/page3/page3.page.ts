import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  name: string='';

  constructor(public router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['home']);
  }

  
  

}
