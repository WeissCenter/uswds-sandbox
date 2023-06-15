import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'uswds-accordion-item',
  styleUrl: 'uswds-accordion-item.css',
  shadow: false,
})
export class UswdsAccordionItem {
  @Prop() header: string;
  @Prop() expanded: boolean = false;

  render() {
    const id = crypto.randomUUID();
    return (
      <Host>
          <h4 class="usa-accordion__heading">
            <button
              type="button"
              class="usa-accordion__button"
              aria-expanded={`${this.expanded}`}
              aria-controls={id + "-accordion-control"}
            >
              {this.header}
            </button>
          </h4>
          <div id={id + "-accordion-control"} class="usa-accordion__content usa-prose" hidden={!this.expanded}>
              <slot></slot>
          </div>
      </Host>
    );
  }

}
