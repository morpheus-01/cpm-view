import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  { DataTableModule, PanelModule, FieldsetModule, GrowlModule } from 'primeng/primeng';  

import { CpmSettingsComponent } from './containers/cpm-settings/cpm-settings.component';


const routes: Routes = [
    { 
        path: 'passengers', 
        children: [
            { path: '', component: CpmSettingsComponent },
        ]
    }
];

@NgModule({
    declarations: [
        CpmSettingsComponent
    ],
    providers:[
    ],
    imports:[
        RouterModule.forChild(routes),
        PanelModule
    ],
    exports:[
        CpmSettingsComponent
    ]
})
export class CpmSettingsModule {


}