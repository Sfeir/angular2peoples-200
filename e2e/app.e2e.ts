import { PeoplePage } from './app.po';

describe('app App', function() {
  let page: PeoplePage;

  beforeEach(() => {
    page = new PeoplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
