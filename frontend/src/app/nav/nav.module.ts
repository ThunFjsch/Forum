import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav.component";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  exports: [NavComponent]
})
export class NavModule {}
