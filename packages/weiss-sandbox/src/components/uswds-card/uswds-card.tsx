import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'uswds-card',
  styleUrl: 'uswds-card.css',
  shadow: false,
})
export class UswdsCard {
  @Prop() heading: string = 'Default Heading'
  @Prop() image: string = '';
  @Prop() alt: string = '';

  render() {

    let media = '';

    if (this.image?.length) {
      media = <div class="usa-card__media">
        <div class="usa-card__img">
          <img
            src={this.image}
            alt={this.alt}
          />
        </div>
      </div>
    }



    return (
      <Host>
        <li class="usa-card tablet:grid-col-4">
          <div class="usa-card__container">
            <div class="usa-card__header">
              <h2 class="usa-card__heading">{this.heading}</h2>
            </div>
            {media}
            <div class="usa-card__body">
              <slot name="body"></slot>
            </div>
            <div class="usa-card__footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </li>
      </Host>
    );
  }

}
