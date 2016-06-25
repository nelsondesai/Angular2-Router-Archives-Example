import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
    templateUrl: '/app/archives.component.html'
})
export class ArchivesComponent{
    year= '';
    month="";

    constructor(private _routeParams: RouteParams)
    {
        this.year = this._routeParams.get('year');
        this.month = this._routeParams.get('month');
    }

}