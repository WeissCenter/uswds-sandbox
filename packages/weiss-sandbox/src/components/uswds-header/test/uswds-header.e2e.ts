import { newE2EPage } from '@stencil/core/testing';

describe('uswds-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-header></uswds-header>');

    const element = await page.find('uswds-header');
    expect(element).toHaveClass('hydrated');
  });
});
