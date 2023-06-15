import { Component, Host, h } from '@stencil/core';

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
