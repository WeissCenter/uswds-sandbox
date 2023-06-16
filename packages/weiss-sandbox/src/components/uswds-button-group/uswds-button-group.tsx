import { Component, Host, h } from '@stencil/core';
import * as uswds from '@uswds/uswds';
import * as uswdsInit from '@uswds/uswds/dist/js/uswds-init.js'
@Component({
  tag: 'uswds-button-group',
  styleUrl: 'uswds-button-group.css',
  shadow: true,
})
export class UswdsButtonGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
