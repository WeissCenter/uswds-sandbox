import { newSpecPage } from '@stencil/core/testing';
import { UswdsExtendedHeader } from '../uswds-extended-header';

describe('uswds-extended-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsExtendedHeader],
      html: `<uswds-extended-header></uswds-extended-header>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-extended-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-extended-header>
    `);
  });
});
