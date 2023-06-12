import { newE2EPage } from '@stencil/core/testing';

describe('uswds-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-modal></uswds-modal>');

    const element = await page.find('uswds-modal');
    expect(element).toHaveClass('hydrated');
  });
});
