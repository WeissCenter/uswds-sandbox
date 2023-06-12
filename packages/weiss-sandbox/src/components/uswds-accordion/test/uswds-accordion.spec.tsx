import { newSpecPage } from '@stencil/core/testing';
import { UswdsAccordion } from '../uswds-accordion';

describe('uswds-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsAccordion],
      html: `<uswds-accordion></uswds-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-accordion>
    `);
  });
});
