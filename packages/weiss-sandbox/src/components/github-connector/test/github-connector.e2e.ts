import { newE2EPage } from '@stencil/core/testing';

describe('github-connector', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<github-connector></github-connector>');

    const element = await page.find('github-connector');
    expect(element).toHaveClass('hydrated');
  });
});
