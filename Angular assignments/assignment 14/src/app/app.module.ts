import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

    import {​​​ routingComponents,TechRoutingModule }​​​ from'../app/tech-routing/tech-routing.module'


import { AppComponent } from './app.component';
import { ProdectComponent } from './prodect/prodect.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { NgcolorDirective } from './directives/ngcolor.directive';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { WebComponent } from './web/web.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { JavaComponent } from './java/java.component';
import { RouterModule } from '@angular/router';

import { CloudComputingComponent } from './cloud-computing/cloud-computing.component';
import { IotComponent } from './iot/iot.component';
import { Html5Component } from './html5/html5.component';
import { AwsComponent } from './aws/aws.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdectComponent,
    CalculatorComponent,
    SearchPipe,
    SortPipe,
    NgcolorDirective,
    ChildComponent,
    ParentComponent,
    WebComponent,
    Sibling1Component,
    Sibling2Component,
    JavaComponent,
    routingComponents,
   
    CloudComputingComponent,
    IotComponent,
    Html5Component,
    AwsComponent,
    ReactiveFormsComponent
    
  
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,TechRoutingModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
