import { newE2EPage } from '@stencil/core/testing';

describe('uswds-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-table></uswds-table>');

    const element = await page.find('uswds-table');
    expect(element).toHaveClass('hydrated');
  });
});
