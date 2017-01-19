import { ExpresorideWebPage } from './app.po';

describe('expresoride-web App', function() {
  let page: ExpresorideWebPage;

  beforeEach(() => {
    page = new ExpresorideWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
