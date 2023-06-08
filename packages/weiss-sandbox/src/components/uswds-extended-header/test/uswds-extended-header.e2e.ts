import { newE2EPage } from '@stencil/core/testing';

describe('uswds-extended-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-extended-header></uswds-extended-header>');

    const element = await page.find('uswds-extended-header');
    expect(element).toHaveClass('hydrated');
  });
});
