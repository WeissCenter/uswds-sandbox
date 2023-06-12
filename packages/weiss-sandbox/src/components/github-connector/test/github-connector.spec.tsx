import { newSpecPage } from '@stencil/core/testing';
import { GithubConnector } from '../github-connector';

describe('github-connector', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GithubConnector],
      html: `<github-connector></github-connector>`,
    });
    expect(page.root).toEqualHtml(`
      <github-connector>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </github-connector>
    `);
  });
});
