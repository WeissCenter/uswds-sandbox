import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uswds-modal',
  styleUrl: 'uswds-modal.css',
  shadow: false,
})
export class UswdsModal {

  render() {
    return (
      <Host>

  <div
    class="usa-modal"
    id="example-modal-1"
    aria-labelledby="modal-1-heading"
    aria-describedby="modal-1-description"
  >
    <div class="usa-modal__content">
      <div class="usa-modal__main">
        <h2 class="usa-modal__heading" id="modal-1-heading">
          Are you sure you want to continue?
        </h2>
        <div class="usa-prose">
          <p id="modal-1-description">
            You have unsaved changes that will be lost.
          </p>
        </div>
        <div class="usa-modal__footer">
          <ul class="usa-button-group">
            <li class="usa-button-group__item">
              <button type="button" class="usa-button" data-close-modal>
                Continue without saving
              </button>
            </li>
            <li class="usa-button-group__item">
              <button
                type="button"
                class="usa-button usa-button--unstyled padding-105 text-center"
                data-close-modal
              >
                Go back
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="button"
        class="usa-button usa-modal__close"
        aria-label="Close this window"
        data-close-modal
      >
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
          <use xlinkHref="/assets/uswds/img/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
  </div>
      </Host>
    );
  }

}
