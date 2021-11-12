import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule }  from '@angular/material/icon'
<<<<<<< HEAD
=======
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSelectModule } from '@angular/material/select'
import { MatListModule } from '@angular/material/list'
>>>>>>> d6dad94b8a86bfd4035dc438bb67a4c7fe1df5a2
import { MatCardModule } from '@angular/material/card'

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
<<<<<<< HEAD
=======
  MatSidenavModule,
  MatSelectModule,
  MatListModule,
>>>>>>> d6dad94b8a86bfd4035dc438bb67a4c7fe1df5a2
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
