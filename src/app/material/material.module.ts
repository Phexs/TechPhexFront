import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatButtonToggleModule, 
        MatIconModule, 
        MatFormFieldModule,
        MatInputModule, 
        MatCardModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialComponents =[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
 
  imports: [  MaterialComponents ],
  exports: [  MaterialComponents ]
})
export class MaterialModule { }
