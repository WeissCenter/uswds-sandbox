import { newE2EPage } from '@stencil/core/testing';

describe('design-token-management', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<design-token-management></design-token-management>');

    const element = await page.find('design-token-management');
    expect(element).toHaveClass('hydrated');
  });
});
