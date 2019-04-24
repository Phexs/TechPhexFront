import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatButtonToggleModule, 
        MatIconModule, 
        MatFormFieldModule,
        MatInputModule, 
        MatCardModule,
        MatMenuModule,
        MatGridListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialComponents =[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule
];

@NgModule({
 
  imports: [  MaterialComponents ],
  exports: [  MaterialComponents ]
})
export class MaterialModule { }
