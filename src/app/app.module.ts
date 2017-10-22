import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CpmSettingsModule } from './cpm-settings/cmp-settings.module';

import { CpmSettingsComponent } from './cpm-settings/containers/cpm-settings/cpm-settings.component';

import { CpmMenuModule } from './cpm-menu/cpm-menu.module';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/settings", pathMatch: "full" },
  { path: "settings", component: CpmSettingsComponent },
  // { path: "finance", component: CpmFinanceComponent },
  // { path: "marketing", component: CpmMarketingComponent},
  // { path: "prjects", component: CpmProjectsComponent},
  // { path: "sales", component: CpmSalesComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    CpmSettingsModule,
    CpmMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
