import { Component } from '@angular/core';
import { ApiService } from '../../../common.module';

import 'styles/app.scss';

@Component({
    selector: 'my-app', // <my-app></my-app>
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public url = 'https://github.com/preboot/angular2-webpack';
    public title: string;

    constructor(private api: ApiService) {
        this.title = this.api.title;
    }
}
