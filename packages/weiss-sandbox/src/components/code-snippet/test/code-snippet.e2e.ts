import { newE2EPage } from '@stencil/core/testing';

describe('code-snippet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<code-snippet></code-snippet>');

    const element = await page.find('code-snippet');
    expect(element).toHaveClass('hydrated');
  });
});
