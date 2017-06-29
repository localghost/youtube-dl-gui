import { YoutubeDlGuiPage } from './app.po';

describe('youtube-dl-gui App', () => {
  let page: YoutubeDlGuiPage;

  beforeEach(() => {
    page = new YoutubeDlGuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
