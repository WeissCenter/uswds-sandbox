import { Component, Host, Prop, h } from '@stencil/core';
import * as uswds from '@uswds/uswds';
import * as uswdsInit from '@uswds/uswds/dist/js/uswds-init.js'
@Component({
  tag: 'uswds-accordion',
  styleUrl: 'uswds-accordion.css',
  shadow: false,
})
export class UswdsAccordion {

  @Prop() accordionType : 'borderless' | 'bordered' | 'multiselectable' | 'multiselectable-bordered' = 'borderless';
  

  render() {

    let clazz = '';

    switch(this.accordionType){
      case 'bordered':{
        clazz = 'usa-accordion--bordered'
        break;
      }
      case 'borderless':{
        break;
      }
      case "multiselectable":{
        clazz = 'usa-accordion--multiselectable'
        break;
      }
      case 'multiselectable-bordered':{
        clazz = 'usa-accordion--multiselectable usa-accordion--bordered'
        break;
      }
    }



    return (
      <Host>
        <div class={"usa-accordion" + " " + clazz} data-allow-multiple={this.accordionType.includes("multiselectable")}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
