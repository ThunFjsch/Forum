import { Component, NgModule } from "@angular/core";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  imports: [NavComponent]
})
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {}
