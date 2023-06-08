import { newE2EPage } from '@stencil/core/testing';

describe('sandbox-main-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sandbox-main-content></sandbox-main-content>');

    const element = await page.find('sandbox-main-content');
    expect(element).toHaveClass('hydrated');
  });
});
