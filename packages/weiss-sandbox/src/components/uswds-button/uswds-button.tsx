import { Component, Host, Prop, h } from '@stencil/core';
import {uswdsInitComponents} from '../../utils/utils';
@Component({
  tag: 'uswds-button',
  styleUrl: 'uswds-button.css',
  shadow: false,
})
export class UswdsButton {

  @Prop() unstyled: boolean = false;
  @Prop() inverse: boolean = false;
  @Prop() big: boolean = false;
  @Prop() type: 'default'  | 'secondary' | 'accent-cool' | 'accent-warm' | 'base' | 'outline' = 'default'; 

  private readonly CLASS_MAPPING = { 
    'default': '',
    'secondary': 'usa-button--secondary',
    'accent-cool': 'usa-button--accent-cool',
    'accent-warm': 'usa-button--accent-warm',
    'base': 'usa-button--base',
    'outline': 'usa-button--outline'
  }

  render() {
    uswdsInitComponents();

    let clazz = this.CLASS_MAPPING[this.type];

    if(this.unstyled){
      clazz += ' usa-button--unstyled'
    }

    if(this.inverse){
      clazz += ' usa-button--inverse'
    }

    if(this.big){
      clazz += ' usa-button--big'
    }



    return (
      <Host>
       <button type="button" class={"usa-button " + clazz}>Default</button>
      </Host>
    );
  }

}
