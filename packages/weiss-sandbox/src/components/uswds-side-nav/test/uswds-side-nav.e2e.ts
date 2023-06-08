import { newE2EPage } from '@stencil/core/testing';

describe('uswds-side-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-side-nav></uswds-side-nav>');

    const element = await page.find('uswds-side-nav');
    expect(element).toHaveClass('hydrated');
  });
});
