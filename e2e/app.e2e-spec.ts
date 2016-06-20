import { Angular2people200Page } from './app.po';

describe('angular2people-200 App', function() {
  let page: Angular2people200Page;

  beforeEach(() => {
    page = new Angular2people200Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
