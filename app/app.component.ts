import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {ArchivesComponent} from './archives.component';
@RouteConfig(
    [
        { path:'/', name:'Home', component:HomeComponent, useAsDefault:true},
        { path:'/archives/:year/:month', name:'Archives', component:ArchivesComponent},        
        { path:'/*other', name:'Other', redirectTo:['Home'] }                
    ]
)
@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,    
    directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {
    archives = [
      { year: 2016, month: 1 },  
      { year: 2016, month: 2 },  
      { year: 2016, month: 3 },  
    ];
}