import { newE2EPage } from '@stencil/core/testing';

describe('uswds-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-card></uswds-card>');

    const element = await page.find('uswds-card');
    expect(element).toHaveClass('hydrated');
  });
});
