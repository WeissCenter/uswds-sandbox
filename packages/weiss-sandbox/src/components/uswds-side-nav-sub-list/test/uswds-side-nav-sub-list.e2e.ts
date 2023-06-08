import { newE2EPage } from '@stencil/core/testing';

describe('uswds-side-nav-sub-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uswds-side-nav-sub-list></uswds-side-nav-sub-list>');

    const element = await page.find('uswds-side-nav-sub-list');
    expect(element).toHaveClass('hydrated');
  });
});
