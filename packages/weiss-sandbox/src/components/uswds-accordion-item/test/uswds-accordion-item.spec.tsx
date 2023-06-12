import { newSpecPage } from '@stencil/core/testing';
import { UswdsAccordionItem } from '../uswds-accordion-item';

describe('uswds-accordion-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsAccordionItem],
      html: `<uswds-accordion-item></uswds-accordion-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-accordion-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-accordion-item>
    `);
  });
});
