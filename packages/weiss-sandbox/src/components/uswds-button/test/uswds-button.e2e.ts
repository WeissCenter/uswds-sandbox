import { newE2EPage } from '@stencil/core/testing';

describe('uswds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-button></uswds-button>');

    const element = await page.find('uswds-button');
    expect(element).toHaveClass('hydrated');
  });
});
