import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges,OnInit,DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked {
  // @Input() parentData: String
  // @Input() anotherData: number

  // @Output() sendData: EventEmitter<String> = new EventEmitter()
  // childData: String = 'this is child data....'


  // sendDataToParent(){
  //   this.sendData.emit(this.childData)
  // }


  @Input() username: String

  constructor() {
    console.log("0. child component object created..");
   }

ngOnChanges(){
  // only for form input changes 
  console.log("in ngonchanges method..for every chnage in input")

}
  ngOnInit(): void {
    console.log("2. it will call for component  initialization...")
  }
  ngDoCheck(){
    console.log("3.Any change in parent..")
  }
  ngAfterContentInit(){
console.log("4.called when content initialization...")

//data is ready
  }

  ngAfterViewInit(){
    console.log("6. view is ready and fully initialized..")
  }

  ngAfterViewChecked(){
    console.log("7. Reinitialized view when any chnage is made ")
  }
   ngDestroy(){
     console.log("8. Destroy compo")
   }
}
