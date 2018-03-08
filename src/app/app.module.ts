import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Routes
import { routing, appRoutingProviders } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HomeComponent} from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ListComponent } from './components/toList.component';
import { AddItemComponent } from './components/addItem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ListComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
