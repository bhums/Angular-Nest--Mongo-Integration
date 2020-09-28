import { ContactPage } from './contact.po';
import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';



describe('workspace-project App', () => {
  let page: AppPage;
  let contactPage: ContactPage;


  beforeEach(() => {
    page = new AppPage();
    contactPage = new ContactPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.debugger();
    expect(page.getTitleText()).toEqual('main works!');
  });
  it('should display contact  message', () => {
    contactPage.navigateToContact();
   // browser.debugger();
    expect(contactPage.getTextContact()).toEqual('contact works!');
  });
  it('should display button message', () => {
    contactPage.navigateToContact();
   // browser.debugger();
    expect(contactPage.getBtnText()).toEqual('bhuma');
  });
  it('should display lable  dynamic text', () => {
    contactPage.navigateToContact();
    element(by.buttonText('bhuma')).click();
    expect(contactPage.getLblText()).toEqual('Bhuma');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
