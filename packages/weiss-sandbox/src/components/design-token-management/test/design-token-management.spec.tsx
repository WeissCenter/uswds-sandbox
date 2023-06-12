import { newSpecPage } from '@stencil/core/testing';
import { DesignTokenManagement } from '../design-token-management';

describe('design-token-management', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DesignTokenManagement],
      html: `<design-token-management></design-token-management>`,
    });
    expect(page.root).toEqualHtml(`
      <design-token-management>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </design-token-management>
    `);
  });
});
