import { ThePlanetsPage } from './app.po';

describe('the-planets App', function() {
  let page: ThePlanetsPage;

  beforeEach(() => {
    page = new ThePlanetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Planets works!');
  });
});
