import { Angularpeople200Page } from './app.po';

describe('angularpeople-200 App', function() {
  let page: Angularpeople200Page;

  beforeEach(() => {
    page = new Angularpeople200Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angularpeople-200 works!');
  });
});
