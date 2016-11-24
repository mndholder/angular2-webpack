import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';

@NgModule({
    providers: [
        ApiService
    ]
})
export class CommonModule {}

// Add module exports here for shortcuts
export {ApiService};
