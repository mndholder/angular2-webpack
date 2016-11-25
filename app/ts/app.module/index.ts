import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './components/app.component';
import { AppRoutingModule, routedComponents } from '../app.routing.module';
import { HeroService } from './services/hero.service';
import { HeroSearchComponent } from './components/hero-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
    ],
    declarations: [
        AppComponent,
        HeroSearchComponent,
        routedComponents
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
