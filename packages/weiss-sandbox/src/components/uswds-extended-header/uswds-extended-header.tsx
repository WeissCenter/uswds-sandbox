import { Component, h } from '@stencil/core';
import {uswdsInitComponents} from '../../utils/utils';
@Component({
  tag: 'uswds-extended-header',
  styleUrl: 'uswds-extended-header.css',
  shadow: false,
})
export class UswdsExtendedHeader {

  render() {
    uswdsInitComponents();
    return (
      <header class="usa-header usa-header--extended">
        <div class="usa-navbar">
          <div class="usa-logo" id="-logo">
            <em class="usa-logo__text"><a href="/" title="Home">Home</a></em>
          </div>
          <button type="button" class="usa-menu-btn">Menu</button>
        </div>
        <nav aria-label="Primary navigation" class="usa-nav">
          <div class="usa-nav__inner">
            <button type="button" class="usa-nav__close">
              <img src="/assets/images/usa-icons/close.svg" role="img" alt="Close" />
            </button>
            <ul class="usa-nav__primary usa-accordion">
              <li class="usa-nav__primary-item">
                <button
                  type="button"
                  class="usa-accordion__button usa-nav__link usa-current"
                  aria-expanded="false"
                  aria-controls="extended-nav-section-one"
                >
                  <span>&lt;Current section&gt;</span>
                </button>
                <ul id="extended-nav-section-one" class="usa-nav__submenu" hidden>
                  <li class="usa-nav__submenu-item">
                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li class="usa-nav__primary-item">
                <button
                  type="button"
                  class="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="extended-nav-section-two"
                >
                  <span>&lt;Section&gt;</span>
                </button>
                <ul id="extended-nav-section-two" class="usa-nav__submenu" hidden>
                  <li class="usa-nav__submenu-item">
                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li class="usa-nav__primary-item">
                <a href="" class="usa-nav-link"><span>&lt;Simple link&gt;</span></a>
              </li>
            </ul>
            <div class="usa-nav__secondary">
              <ul class="usa-nav__secondary-links"></ul>
              <section aria-label="Search component">
                <form class="usa-search usa-search--small" role="search">
                  <label class="usa-sr-only" htmlFor="search-field">Search</label>
                  <input
                    class="usa-input"
                    id="search-field"
                    type="search"
                    name="search"
                  />
                  <button class="usa-button" type="submit">
                    <img
                      src="/assets/images/usa-icons-bg/search--white.svg"
                      class="usa-search__submit-icon"
                      alt="Search"
                    />
                  </button>
                </form>
              </section>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}
