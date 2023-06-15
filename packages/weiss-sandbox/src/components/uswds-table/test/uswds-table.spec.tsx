import { newSpecPage } from '@stencil/core/testing';
import { UswdsTable } from '../uswds-table';

describe('uswds-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsTable],
      html: `<uswds-table></uswds-table>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-table>
    `);
  });
});
