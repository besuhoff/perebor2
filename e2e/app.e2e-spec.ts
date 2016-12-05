import { PereborPage } from './app.po';

describe('perebor App', function() {
  let page: PereborPage;

  beforeEach(() => {
    page = new PereborPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
