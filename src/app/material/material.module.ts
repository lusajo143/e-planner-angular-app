import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule }  from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
