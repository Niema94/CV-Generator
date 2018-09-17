import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {UserComponent} from './user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    MatCardModule, [MatButtonModule, MatCheckboxModule],
    HttpClientModule,
    FormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
