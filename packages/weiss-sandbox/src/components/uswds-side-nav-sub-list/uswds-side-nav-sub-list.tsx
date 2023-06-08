import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uswds-side-nav-sub-list',
  styleUrl: 'uswds-side-nav-sub-list.css',
  shadow: false,
})
export class UswdsSideNavSubList {

  render() {
    return (
      <Host>
        <ul class="usa-sidenav__sublist">
            <slot></slot>
        </ul>
      </Host>
    );
  }

}
