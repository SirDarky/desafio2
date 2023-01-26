import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EventTopComponent } from './event-top/event-top.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { MainSideComponent } from './main-side/main-side.component';
import { BootsShowComponent } from './boots-show/boots-show.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EventTopComponent,
    HeaderMainComponent,
    MainSideComponent,
    BootsShowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
