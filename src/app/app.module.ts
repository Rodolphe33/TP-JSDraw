import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDrawComponent } from './test-draw/test-draw.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DrawComponent } from './draw/draw.component';
import { MenuComponent } from './menu/menu.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GeometryComponent } from './geometry/geometry.component';


@NgModule({
   declarations: [
      AppComponent,
      TestDrawComponent,
      DrawComponent,
      MenuComponent,
      GeometryComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ButtonsModule,
      TabsModule.forRoot(),
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
