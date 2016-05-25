export class Angularpeople200Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angularpeople-200-app h1')).getText();
  }
}
