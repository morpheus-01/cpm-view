import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Menu } from  'primeng/components/menu/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'cpm-menu',
    styleUrls: ['cpm-menu.component.scss'],
    template: `
      <div class="ui-g ui-g-nopad">
        <div class="ui-g-2 ui-g-nopad" id="sidegutter">

          <p-menu [model]="menuItems"></p-menu>
        </div> 
        
      </div>

    `
})
export class CpmMenuComponent implements OnInit {

  menuItems: MenuItem[];

  ngOnInit(){

    this.menuItems = [
      { label: 'Dashboard', icon: 'fa-home', routerLink: '/dashboard'},
      { label: 'Finanzas', icon: 'fa-money', routerLink: '/finance'},
      { label: 'Marketing', icon: 'fa-group', routerLink: '/marketing'},
      { label: 'Proyectos', icon: 'fa-building', routerLink: '/projects'},
      { label: 'Ventas', icon: 'fa-first-order', routerLink: '/sales'},
    ]
  }

} 