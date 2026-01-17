import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { TableLayoutOptions } from '../components/table/table.component';
import { DynamicObject } from '../models/interfaces/_dynamicobject';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    public menu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    public tableLayout: BehaviorSubject<TableLayoutOptions> = new BehaviorSubject<TableLayoutOptions>({});
    public menuItemsReload: BehaviorSubject<any> = new BehaviorSubject<any>({ relaod: false });
    public fullScreen: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
    public imagesFullScreen: BehaviorSubject<any> = new BehaviorSubject<any>({});
    public imagePopup: BehaviorSubject<any> = new BehaviorSubject<any>({});
    public dynamicObjects: BehaviorSubject<DynamicObject[]> = new BehaviorSubject<DynamicObject[]>([]);
    public dynamicObjectClose: BehaviorSubject<DynamicObject> = new BehaviorSubject<DynamicObject>({ visible: false, width: '50rem' });

    constructor() { }

    // Other methods //

    public isDesktop(): boolean {
        return window?.innerWidth > 991;
    }

    public isMobile(): boolean {
        return !this.isDesktop();
    }
}