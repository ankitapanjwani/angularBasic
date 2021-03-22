import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit   {

  //  @ViewChild(ChildComponent) vc: ChildComponent
  //  temp: String
  //  ngAfterViewInit(){
  //   this.temp = this.vc.childData,
  //    console.log('accessing child Data using @viewchild: ', this.vc.childData)
  //  }

  //   parentData: String = 'this is parent data...'
  //   anotherData: number = 12
  // childData: String
  //   receiveDataFromchild(data: String){
  //     this.childData = data,
  //       console.log("Data from child recieved..", data);
  //   }

  username: String

  constructor() { }

  ngOnInit(): void {
  }

}
