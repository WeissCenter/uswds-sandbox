import { Component, Host, Prop, h } from '@stencil/core';


@Component({
  tag: 'uswds-side-nav',
  styleUrl: 'uswds-side-nav.css',
  shadow: false,
})
export class UswdsSideNav {
  @Prop() region: string = "Side Navigation"



  render() {

    
    return (

      <Host>
        <nav aria-label={this.region}>
         <ul class="usa-sidenav">
            <slot></slot>
         </ul>
       </nav>
      </Host>
 

    );
  }

}
