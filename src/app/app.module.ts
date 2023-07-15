import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogConfig, MatDialogRef  } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { IntroComponent } from './components/main-page/main-page.component';
import { AccountDialogComponent } from './components/account-dialog/account-dialog.component';
import { ItemComponent } from './components/item/item.component';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    AppHeaderComponent,
    IntroComponent,
    AccountDialogComponent,
    ItemComponent,
	
  ],
  imports: [
  BrowserModule,
	NgbModule,
	FormsModule,
  AppRoutingModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
	MatDialogModule,
	MatFormFieldModule,
	MatNativeDateModule,
	HttpClientModule,
	MatInputModule,
  CommonModule

  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
