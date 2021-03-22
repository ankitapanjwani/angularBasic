import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InrusdPipe } from './../inrusd.pipe';
import { AnotherpipePipe } from './anotherpipe.pipe';



@NgModule({
  declarations: [
    InrusdPipe,
    AnotherpipePipe
  ],
  imports: [
  CommonModule
  ],
  exports:[
    InrusdPipe,AnotherpipePipe
  ]
})
export class SharedModule { }
