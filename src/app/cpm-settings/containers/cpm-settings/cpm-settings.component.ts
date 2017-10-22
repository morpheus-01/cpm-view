import { Component } from '@angular/core';

@Component({
    selector: 'cpm-settings',
    styleUrls: ['cpm-settings.component.scss'],
    template: `
        <p-panel header="Settings">
            <div class="ui-g">
                <label for="notify" class="ui-g-12 ui-md-2">Email To Notify:</label>
                <input id="notify"  class="ui-g-12 ui-md-10" placeholder="Enter an Email Address" type="email">
            </div>
            <div class="ui-g">
                <label for="email" class="ui-g-12 ui-md-2">Send Email:</label>
                <button id="email" class="ui-g-12 ui-md-10">Send Email Now</button>
            </div>

            <!--div class="ui-g">
                <i class="icon fa fa-cloud-download"></i>
                <div id="statistic" class="ui-g-12 ui-md-10 ui-g-nopad">
                    <div class="icon ui-g-5">
                        <i class="fa fa-cloud-download"></i>
                    </div>
                    <div class="data ui-g-7">
                        <div class="value">20</div>
                        <div class="label">Days Uptime</div>
                    </div>
                </div>
            </div-->
        </p-panel>

    `
})
export class CpmSettingsComponent {

}