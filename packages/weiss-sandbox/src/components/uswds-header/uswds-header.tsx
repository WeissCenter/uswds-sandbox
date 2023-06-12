import { Component, Host, Prop, h } from '@stencil/core';
import { HeaderNavItem, HeaderNavItemType } from '../../model/HeaderNavMenu';

@Component({
  tag: 'uswds-header',
  styleUrl: 'uswds-header.css',
  shadow: false,
})
export class UswdsHeader {

  @Prop()
  headerTitle: string = 'Project Title';

  @Prop()
  enableSearch: boolean = true;

  @Prop()
  navItems: HeaderNavItem[] = [];

  private renderNavItem({item, items, type, menuTitle}: HeaderNavItem) {

    switch (type) {
      case HeaderNavItemType.NAV_LINK: {

        return (
        <li class="usa-nav__primary-item">
          <a href={item.href} class="usa-nav-link">
            <span>{item.label}</span>
          </a>
        </li>
      )
      }
      case HeaderNavItemType.SUB_MENU: {


        return (

          <li class="usa-nav__primary-item">

            <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="basic-nav-section-two">
              <span>{menuTitle}</span>
            </button>

            {items?.length ? <ul id="basic-nav-section-two" class="usa-nav__submenu" hidden>

                {items.map((menuItem) => 

                    <li class="usa-nav__submenu-item">
                      <a href={menuItem.href}>
                        <span>{menuItem.label}</span>
                      </a>
                    </li>
              
                )}

            </ul> : null}

          </li>

        )



      }
    }

  }


  private renderHeaderNav() {

    if (!this.navItems.length) {
      return;
    }

    return (

      <ul class="usa-nav__primary usa-accordion">

        {this.navItems.map((nav) => this.renderNavItem(nav))}

      </ul>

    )

  }

  render() {
    return (

      <Host>
      <header class="usa-header usa-header--basic">
        <div class="usa-nav-container">
          <div class="usa-navbar">
            <div class="usa-logo" id="basic-logo">
              <em class="usa-logo__text">
                <a href="javascript:void(0)" title="title">
                  {this.headerTitle}
                </a>
              </em>
            </div>
            <button type="button" class="usa-menu-btn">
              Menu
            </button>
          </div>
          <nav aria-label="Primary navigation" class="usa-nav">

            <button type="button" class="usa-nav__close">
              <img src="./assets/img/usa-icons/close.svg" role="img" alt="Close"></img>
            </button>


            {this.renderHeaderNav()}


            {this.enableSearch ? <section aria-label="Search component">
              <form class="usa-search usa-search--small " role="search">
                <label class="usa-sr-only" htmlFor="search-field">
                  Search
                </label>
                <input class="usa-input" id="search-field" type="search" name="search"></input>
                <button class="usa-button" type="submit">
                  <img src="./assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search"></img>
                </button>
              </form>
            </section> : null}


            <slot></slot>

          </nav>
        </div>
      </header>
      </Host>

    );
  }

}
