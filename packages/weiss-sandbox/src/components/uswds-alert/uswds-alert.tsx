import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'uswds-alert',
  styleUrl: 'uswds-alert.css',
  shadow: false,
})
export class UswdsAlert {
  @Prop() type: 'info' | 'warning' | 'error' | 'success' = 'info'
  @Prop() slim: boolean = false;
  @Prop() icon: boolean = true;


  render() {

    let clazz = 'usa-alert '

    switch(this.type){
      case 'info':{
        clazz += "usa-alert--info"
        break;
      }
      case 'error':{
        clazz += "usa-alert--error"
        break;
      }
      case 'success':{
        clazz += "usa-alert--success"
        break;
      }
      case 'warning':{
        clazz += "usa-alert--warning"
        break;
      }
      default:{
        throw new Error("Unknown alert type " + this.type)
      }
    }


    return (
      <Host>
        <div class={clazz}>
          <div class="usa-alert__body">
            <h4 class="usa-alert__heading">
              <slot name="heading"></slot>
            </h4>
            <p class="usa-alert__text">
              <slot></slot>
            </p>
          </div>
        </div>
      </Host>
    );
  }

}
