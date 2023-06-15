import { newSpecPage } from '@stencil/core/testing';
import { CodeSnippet } from '../code-snippet';

describe('code-snippet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CodeSnippet],
      html: `<code-snippet></code-snippet>`,
    });
    expect(page.root).toEqualHtml(`
      <code-snippet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </code-snippet>
    `);
  });
});
