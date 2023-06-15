import { Component, Host, h } from '@stencil/core';

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
