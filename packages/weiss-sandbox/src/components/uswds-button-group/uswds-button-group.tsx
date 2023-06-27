import { Component, Host, h, Element, State } from '@stencil/core';
import {uswdsInitComponents} from '../../utils/utils';
@Component({
  tag: 'uswds-button-group',
  styleUrl: 'uswds-button-group.css',
  shadow: false,
})
export class UswdsButtonGroup {
  @Element() host: HTMLDivElement;
  @State() children: string[] = [];

  componentWillLoad(){
    this.children = Array.from(this.host.children)
    .map((child) => {
  
      child.setAttribute('type', child['type']);
      child.setAttribute('unstyled', child['unstyled']);
      child.setAttribute('big', child['big']);
      child.setAttribute('inverse', child['inverse']);

      return child.outerHTML
    });
    this.host.innerHTML = '';
    
  }

  render() {
    uswdsInitComponents();


    return (
      <Host>

        <ul class="usa-button-group">

          {this.children
           .map((child) =>  <li class="usa-button-group__item" innerHTML={child}></li>)
          
          }

        </ul>
      </Host>
    );
  }

}
