import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { DialogComponent } from './dialog/dialog.component'
import { MatInputModule } from '@angular/material/input'

const Material = [
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule
]

@NgModule({
  declarations: [
    SigninComponent,
    DialogComponent
  ],
  imports: [
    Material
  ],
  exports: [Material]
})
export class AuthModule { }
