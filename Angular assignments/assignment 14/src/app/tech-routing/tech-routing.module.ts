// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class TechRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { CloudComputingComponent } from '../cloud-computing/cloud-computing.component';
import { IotComponent } from '../iot/iot.component';
import { Html5Component } from '../html5/html5.component';
import { AwsComponent } from '../aws/aws.component';

const routes:Routes = [
  
  {path:'web', component:WebComponent,

  children:[

    {path:'cloud-computing', component:CloudComputingComponent  
    },

    {path:'iot', component:IotComponent },

    

  ] },

  {path:'java', component:JavaComponent,

children:[

  {path:'html5', component:Html5Component },

  {path:'aws', component:AwsComponent },

  

] },
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent,JavaComponent]