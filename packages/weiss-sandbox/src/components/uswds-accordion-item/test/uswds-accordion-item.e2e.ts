import { newE2EPage } from '@stencil/core/testing';

describe('uswds-accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-accordion-item></uswds-accordion-item>');

    const element = await page.find('uswds-accordion-item');
    expect(element).toHaveClass('hydrated');
  });
});
