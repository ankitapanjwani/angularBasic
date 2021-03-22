import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',



  templateUrl: './product.component.html',
  // template: '<h1>this is template html </h1>',

  //  2 ways to declare style css 
  styleUrls: ['./product.component.scss'],
  // styles: [' p {color: red}']


})
export class ProductComponent implements OnInit {
  title: string = "Product Management System";
  skills: string[] = ['java', 'spring', 'hibernate','angular','react']
  
  isDisabled: boolean = false 

  address: string= "pune"
  dob: Date = new Date(1984,4,20)

  isVisible: boolean = true


  constructor() { }

  ngOnInit(): void {

  
  }
  fun1(){
    alert("paragraph clicked")
  }
  showHideSkills(){
    this.isVisible = !this.isVisible
  }
}
