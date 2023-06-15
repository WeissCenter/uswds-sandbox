import { newE2EPage } from '@stencil/core/testing';

describe('uswds-button-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-button-group></uswds-button-group>');

    const element = await page.find('uswds-button-group');
    expect(element).toHaveClass('hydrated');
  });
});
