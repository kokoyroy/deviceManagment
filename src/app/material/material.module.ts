import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';

import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';



const materialComponents = [MatButtonModule,MatSidenavModule,MatListModule]
@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
