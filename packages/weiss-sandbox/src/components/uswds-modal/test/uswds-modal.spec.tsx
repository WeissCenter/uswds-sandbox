import { newSpecPage } from '@stencil/core/testing';
import { UswdsModal } from '../uswds-modal';

describe('uswds-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsModal],
      html: `<uswds-modal></uswds-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-modal>
    `);
  });
});
