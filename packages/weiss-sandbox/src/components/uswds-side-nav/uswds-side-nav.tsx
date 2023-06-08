import { Component, Host, Prop, h } from '@stencil/core';


@Component({
  tag: 'uswds-side-nav',
  styleUrl: 'uswds-side-nav.css',
  shadow: false,
})
export class UswdsSideNav {
  @Prop() ariaLabel: string = "Side Navigation"



  render() {

    
    return (

      <Host>
        <nav aria-label={this.ariaLabel}>
         <ul class="usa-sidenav">
            <slot></slot>
         </ul>
       </nav>
      </Host>
 

    );
  }

}
