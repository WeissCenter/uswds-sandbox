import { newE2EPage } from '@stencil/core/testing';

describe('uswds-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-accordion></uswds-accordion>');

    const element = await page.find('uswds-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
