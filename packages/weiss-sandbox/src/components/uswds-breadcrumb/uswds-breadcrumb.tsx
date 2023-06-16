import { Component, Host, h } from '@stencil/core';
import * as uswds from '@uswds/uswds';
import * as uswdsInit from '@uswds/uswds/dist/js/uswds-init.js'
@Component({
  tag: 'uswds-breadcrumb',
  styleUrl: 'uswds-breadcrumb.css',
  shadow: true,
})
export class UswdsBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
