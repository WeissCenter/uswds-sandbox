import { Component, Host, h } from '@stencil/core';
import {uswdsInitComponents} from '../../utils/utils';
@Component({
  tag: 'uswds-button',
  styleUrl: 'uswds-button.css',
  shadow: true,
})
export class UswdsButton {

  render() {
    uswdsInitComponents();
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
