import { Component, Host, h } from '@stencil/core';
import {uswdsInitComponents} from '../../utils/utils';
@Component({
  tag: 'uswds-button-group',
  styleUrl: 'uswds-button-group.css',
  shadow: true,
})
export class UswdsButtonGroup {

  render() {
    uswdsInitComponents();
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
