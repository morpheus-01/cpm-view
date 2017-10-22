import { NgModule } from '@angular/core';
import  { MenuModule } from 'primeng/primeng';  
import { CpmMenuComponent } from './containers/cpm-menu/cpm-menu.component';

@NgModule({
    declarations: [
        CpmMenuComponent
    ],
    providers:[
    ],
    imports:[
        MenuModule
    ],
    exports:[
        CpmMenuComponent
    ]
})
export class CpmMenuModule {

}