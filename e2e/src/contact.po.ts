import { browser, by, element } from 'protractor';
// import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class ContactPage {

  navigateToContact(): Promise<unknown> {
    return browser.get('/contact') as Promise<unknown>;
  }

  getTextContact(): Promise<string> {
    return element(by.css('app-contact span')).getText() as Promise<string>;
    // expect(element(by.id('source-modal')).isPresent()).toBeFalsy("The modal window shouldn't appear right now ");
  }
  getBtnText(): Promise<string> {
    return element(by.className('ram')).getText() as Promise<string>;
    // expect(element(by.id('source-modal')).isPresent()).toBeFalsy("The modal window shouldn't appear right now ");
  }

  getLblText() {
    return element(by.className('lbl')).getText();
  }
}
