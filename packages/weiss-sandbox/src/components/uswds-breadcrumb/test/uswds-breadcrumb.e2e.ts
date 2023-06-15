import { newE2EPage } from '@stencil/core/testing';

describe('uswds-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-breadcrumb></uswds-breadcrumb>');

    const element = await page.find('uswds-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
