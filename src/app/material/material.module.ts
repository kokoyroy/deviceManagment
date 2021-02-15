import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';



const materialComponents = [MatInputModule,MatButtonModule,MatSidenavModule,MatIconModule,MatListModule]
@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
