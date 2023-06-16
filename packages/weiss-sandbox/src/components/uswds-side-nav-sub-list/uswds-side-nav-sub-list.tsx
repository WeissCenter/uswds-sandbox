import { Component, Host, h } from '@stencil/core';
import * as uswds from '@uswds/uswds';
import * as uswdsInit from '@uswds/uswds/dist/js/uswds-init.js'
@Component({
  tag: 'uswds-side-nav-sub-list',
  styleUrl: 'uswds-side-nav-sub-list.css',
  shadow: false,
})
export class UswdsSideNavSubList {

  render() {
    return (
      <Host>
        <ul class="usa-sidenav__sublist">
            <slot></slot>
        </ul>
      </Host>
    );
  }

}
