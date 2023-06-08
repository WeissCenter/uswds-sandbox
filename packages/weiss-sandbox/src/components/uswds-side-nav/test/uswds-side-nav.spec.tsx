import { newSpecPage } from '@stencil/core/testing';
import { UswdsSideNav } from '../uswds-side-nav';

describe('uswds-side-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsSideNav],
      html: `<uswds-side-nav></uswds-side-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-side-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-side-nav>
    `);
  });
});
