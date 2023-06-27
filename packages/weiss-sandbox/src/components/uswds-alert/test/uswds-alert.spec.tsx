import { newSpecPage } from '@stencil/core/testing';
import { UswdsAlert } from '../uswds-alert';

describe('uswds-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsAlert],
      html: `<uswds-alert></uswds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-alert>
    `);
  });
});
