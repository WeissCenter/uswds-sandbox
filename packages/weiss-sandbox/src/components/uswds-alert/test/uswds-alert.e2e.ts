import { newE2EPage } from '@stencil/core/testing';

describe('uswds-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-alert></uswds-alert>');

    const element = await page.find('uswds-alert');
    expect(element).toHaveClass('hydrated');
  });
});
