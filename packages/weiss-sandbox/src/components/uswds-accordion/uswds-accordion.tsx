import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'uswds-accordion',
  styleUrl: 'uswds-accordion.css',
  shadow: false,
})
export class UswdsAccordion {

  @Prop() accordionType : 'borderless' | 'bordered' | 'multiselectable' = 'borderless';

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
    }



    return (
      <Host>
        <div class={"usa-accordion" + " " + clazz} data-allow-multiple={this.accordionType === 'multiselectable'}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
