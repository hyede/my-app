import { PermissionPage } from './app.po';

describe('permission App', () => {
  let page: PermissionPage;

  beforeEach(() => {
    page = new PermissionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
