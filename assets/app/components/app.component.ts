import { Component } from '@angular/core';

import {StorageService} from "../services/storage.service";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [StorageService]
})
export class AppComponent {
    
    public updateid = '';
    public deleteid = '';
    public select = '';
    public insert = '';
    public update = '';
    public delete = '';
    public update_id = '';
    public delete_id = '';

    constructor(public storageService: StorageService) {}

    select_func() {
        this.storageService.select('/api/pages' ).
            subscribe( res => {
                console.log( 'get - ' , res );
                this.select =  JSON.stringify(res);
            });
    };

    insert_func() {
        this.storageService.insert('/api/pages',{
            name : ' header ',
            body : []
         }).
            subscribe( res => {
                console.log( 'post - ' , res );
                this.insert =  JSON.stringify(res);
            });
    };

    update_func() {
        this.storageService.update('/api/pages',{
            id : this.update_id,
            name : ' header ',
            body : [{ name: 'test', type: 'String'}]
        }).
            subscribe( res => {
                console.log( 'put- ' , res );
                this.update =  JSON.stringify(res);
            });
    };

    delete_func() {
        this.storageService.delete('/api/pages', this.delete_id).
            subscribe( res => {
                console.log( 'delete- ' , res );
                this.delete =  JSON.stringify(res);
            });
    };
    
}