import { Component, Host, h } from '@stencil/core';

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
