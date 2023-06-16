import { newSpecPage } from '@stencil/core/testing';
import { SandboxComponent } from '../sandbox-component';

describe('sandbox-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SandboxComponent],
      html: `<sandbox-component></sandbox-component>`,
    });
    expect(page.root).toEqualHtml(`
      <sandbox-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sandbox-component>
    `);
  });
});
