import { Component, Host, Prop, h } from '@stencil/core';
import { uswdsInitComponents } from '../../utils/utils';
import { BreadcrumbItem } from '../../model/BreadcrumbItem';
@Component({
  tag: 'uswds-breadcrumb',
  styleUrl: 'uswds-breadcrumb.css',
  shadow: false,
})
export class UswdsBreadcrumb {
  @Prop() breadcrumbs: BreadcrumbItem[] = [];

  @Prop() ariaLabel: string;

  render() {
    uswdsInitComponents();

    if (!this.breadcrumbs?.length) {
      return <Host></Host >
    }

    return (
      <Host>
        <nav class="usa-breadcrumb" aria-label={this.ariaLabel}>
          <ol class="usa-breadcrumb__list">
            {this.breadcrumbs.map((breadcrumb) => {


              if (breadcrumb.current) {

                return <li class="usa-breadcrumb__list-item" aria-current="page">
                  <span>{breadcrumb.label}</span>
                </li>

              }


              return <li class="usa-breadcrumb__list-item">

                <a href={breadcrumb.href} class={"usa-breadcrumb__link" + breadcrumb.current ? ' usa-current' : ''} aria-current={breadcrumb.current ? 'page' : null}><span>{breadcrumb.label}</span></a>

              </li>


            }


            )}

          </ol>
        </nav>
      </Host >
    );
  }

}
