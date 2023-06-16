import { Component, Host, h } from '@stencil/core';
import * as uswds from '@uswds/uswds';
import * as uswdsInit from '@uswds/uswds/dist/js/uswds-init.js'
@Component({
  tag: 'uswds-button',
  styleUrl: 'uswds-button.css',
  shadow: true,
})
export class UswdsButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
