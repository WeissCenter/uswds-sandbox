import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'uswds-table',
  styleUrl: 'uswds-table.css',
  shadow: false,
})
export class UswdsTable {

  @Prop() tableType: 'borderless' | 'bordered' = 'borderless';
  @Prop() caption: string = ``

  render() {

    let clazz = '';

    switch (this.tableType) {
      case 'borderless': {
        clazz = 'usa-table--borderless'
        break;
      }
      case 'bordered': {
        break;
      }

    }



    return (

        <div class="usa-table-container--scrollable">
          <table class={"usa-table" + " " + clazz}>
            <caption>
              {this.caption}
            </caption>
            <thead>
              <slot name="header"></slot>
            </thead>
            <tbody>
              <slot name="body"></slot>
            </tbody>
          </table>
          <div
            class="usa-sr-only usa-table__announcement-region"
            aria-live="polite"
          ></div>
          
        </div>

 
    );
  }

}
