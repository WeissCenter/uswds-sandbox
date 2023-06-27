import { newSpecPage } from '@stencil/core/testing';
import { UswdsCard } from '../uswds-card';

describe('uswds-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsCard],
      html: `<uswds-card></uswds-card>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-card>
    `);
  });
});
