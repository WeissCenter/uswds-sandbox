import { newSpecPage } from '@stencil/core/testing';
import { UswdsHeader } from '../uswds-header';

describe('uswds-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsHeader],
      html: `<uswds-header></uswds-header>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-header>
    `);
  });
});
