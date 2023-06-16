import { Component, Host, h } from '@stencil/core';
import {uswdsInitComponents} from '../../utils/utils';
@Component({
  tag: 'uswds-breadcrumb',
  styleUrl: 'uswds-breadcrumb.css',
  shadow: true,
})
export class UswdsBreadcrumb {

  render() {
    uswdsInitComponents();
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
