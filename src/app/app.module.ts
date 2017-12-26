import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './composants/user/user.component';
import { RessourceComponent } from './composants/ressource/ressource.component';
import { RouterModule } from '@angular/router' ;
import { UserService } from './services/user.service';
import {FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './composants/user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RessourceComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'user', component: UserComponent},
  {path: 'ressource' , component: RessourceComponent},
{path: 'userDetails/:numero', component: UserDetailsComponent}])

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
