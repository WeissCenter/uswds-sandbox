import { newSpecPage } from '@stencil/core/testing';
import { UswdsBreadcrumb } from '../uswds-breadcrumb';

describe('uswds-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsBreadcrumb],
      html: `<uswds-breadcrumb></uswds-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-breadcrumb>
    `);
  });
});
