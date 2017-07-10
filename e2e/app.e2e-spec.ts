import { Proj6Page } from './app.po';

describe('proj6 App', () => {
  let page: Proj6Page;

  beforeEach(() => {
    page = new Proj6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
