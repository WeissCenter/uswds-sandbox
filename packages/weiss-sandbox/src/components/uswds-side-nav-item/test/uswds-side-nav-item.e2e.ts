import { newE2EPage } from '@stencil/core/testing';

describe('uswds-side-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-side-nav-item></uswds-side-nav-item>');

    const element = await page.find('uswds-side-nav-item');
    expect(element).toHaveClass('hydrated');
  });
});
