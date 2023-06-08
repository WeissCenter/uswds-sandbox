import { newSpecPage } from '@stencil/core/testing';
import { SandboxMainContent } from '../sandbox-main-content';

describe('sandbox-main-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SandboxMainContent],
      html: `<sandbox-main-content></sandbox-main-content>`,
    });
    expect(page.root).toEqualHtml(`
      <sandbox-main-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sandbox-main-content>
    `);
  });
});
