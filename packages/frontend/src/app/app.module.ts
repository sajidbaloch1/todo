import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layouts/header/header.component';
import { EmployeeModule } from './pages/employee/employee.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/counter.reducer';
import { NgrxComponent } from './ngrx/ngrx.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, NgrxComponent, HeaderComponent],
  imports: [
    FormsModule,
    IonicModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    EmployeeModule,
    StoreModule.forRoot({ count: counterReducer }),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
