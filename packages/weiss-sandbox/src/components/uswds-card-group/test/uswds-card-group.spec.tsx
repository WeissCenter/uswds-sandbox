import { newSpecPage } from '@stencil/core/testing';
import { UswdsCardGroup } from '../uswds-card-group';

describe('uswds-card-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UswdsCardGroup],
      html: `<uswds-card-group></uswds-card-group>`,
    });
    expect(page.root).toEqualHtml(`
      <uswds-card-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uswds-card-group>
    `);
  });
});
