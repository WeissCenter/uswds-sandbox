import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'uswds-side-nav-item',
  styleUrl: 'uswds-side-nav-item.css',
  shadow: false,
})
export class UswdsSideNavItem {

  render() {
    return (
      <Host>
        <li class="usa-sidenav__item">
            <slot></slot>
        </li>
      </Host>
    );
  }

}
