import { newE2EPage } from '@stencil/core/testing';

describe('uswds-card-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-card-group></uswds-card-group>');

    const element = await page.find('uswds-card-group');
    expect(element).toHaveClass('hydrated');
  });
});
