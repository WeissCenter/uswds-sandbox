import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uswds-card-group',
  styleUrl: 'uswds-card-group.css',
  shadow: false,
})
export class UswdsCardGroup {

  render() {
    return (
      <Host>
        <ul class="usa-card-group">
            <slot></slot>
        </ul>
      </Host>
    );
  }

}
