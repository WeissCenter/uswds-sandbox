import { newSpecPage } from '@stencil/core/testing';
import { UswdsSideNavSubList } from '../uswds-side-nav-sub-list';

describe('uswds-side-nav-sub-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsSideNavSubList],
      html: `<uswds-side-nav-sub-list></uswds-side-nav-sub-list>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-side-nav-sub-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-side-nav-sub-list>
    `);
  });
});
