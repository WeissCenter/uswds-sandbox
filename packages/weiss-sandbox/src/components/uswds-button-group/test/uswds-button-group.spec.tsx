import { newSpecPage } from '@stencil/core/testing';
import { UswdsButtonGroup } from '../uswds-button-group';

describe('uswds-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsButtonGroup],
      html: `<uswds-button-group></uswds-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-button-group>
    `);
  });
});
