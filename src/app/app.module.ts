import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TabsModule } from "../tabs/tabs.module";

@NgModule({
  imports: [BrowserModule, FormsModule, TabsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
