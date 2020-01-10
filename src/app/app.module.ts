import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from  '@angular/fire';
import { AngularFireAuthModule  } from '@angular/fire/auth';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AppModuleAdmin } from './modules/admin/app.module';
import { AppModuleAuth } from './modules/authen/app.module';
import { AppModuleCommun } from './modules/commun/app.module';
import { AppModuleCourses } from './modules/courses/app.module';
import { AppModuleMenu } from './modules/menu/app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppModuleAdmin,
    AppModuleAuth,
    AppModuleCommun,
    AppModuleCourses,
    AppModuleMenu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
