import { newSpecPage } from '@stencil/core/testing';
import { UswdsSideNavItem } from '../uswds-side-nav-item';

describe('uswds-side-nav-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsSideNavItem],
      html: `<uswds-side-nav-item></uswds-side-nav-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-side-nav-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-side-nav-item>
    `);
  });
});
