import { FormappPage } from './app.po';

describe('formapp App', () => {
  let page: FormappPage;

  beforeEach(() => {
    page = new FormappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
