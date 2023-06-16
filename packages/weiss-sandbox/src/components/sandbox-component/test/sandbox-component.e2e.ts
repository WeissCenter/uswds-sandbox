import { newE2EPage } from '@stencil/core/testing';

describe('sandbox-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sandbox-component></sandbox-component>');

    const element = await page.find('sandbox-component');
    expect(element).toHaveClass('hydrated');
  });
});
