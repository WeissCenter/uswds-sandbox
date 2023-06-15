import { newSpecPage } from '@stencil/core/testing';
import { UswdsButton } from '../uswds-button';

describe('uswds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsButton],
      html: `<uswds-button></uswds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-button>
    `);
  });
});
