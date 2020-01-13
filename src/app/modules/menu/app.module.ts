import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MenuTopComponent],
  imports: [AppRoutingModule, CommonModule, BrowserModule],
  exports: [MenuTopComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleMenu {}
