import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ArchivesComponent} from './archives.component';
@Component({
    selector: 'home',
    templateUrl: '/app/home.component.html',    
    directives:[ROUTER_DIRECTIVES]
})
export class HomeComponent {
    archives = [
      { year: 2016, month: 1 },  
      { year: 2016, month: 2 },  
      { year: 2016, month: 3 },  
    ];
}