import { browser, by, element } from 'protractor';
// import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-main p')).getText() as Promise<string>;
    // expect(element(by.id('source-modal')).isPresent()).toBeFalsy("The modal window shouldn't appear right now ");
  }
  navigateToContact(): Promise<unknown> {
    return browser.get('/contact') as Promise<unknown>;
  }

  getTitleTextContact(): Promise<string> {
    return element(by.css('app-contact span')).getText() as Promise<string>;
    // expect(element(by.id('source-modal')).isPresent()).toBeFalsy("The modal window shouldn't appear right now ");
  }

}

//element(): This is used to look up an element in the DOM based on a search condition or a chain of conditions. It returns an ElementFinder object, and you can perform actions such as getText() or click() on them.
//element.all(): This is used to look for an array of elements that match some chain of conditions. It returns an ElementArrayFinder object. All the actions that can be performed on ElementFinder can be performed on ElementArrayFinder also.
// locators: Locators provide methods for finding an element in an Angular application.
// by.buttonText('button-value')
// by.name('name-value')
/*
it('should accept and save input values', () => {
      element(by.buttonText('create Paste')).click();

      //send input values to the form using sendKeys

      element(by.name('title')).sendKeys('Hello world in Ruby');
      element(by.name('language')).element(by.cssContainingText('option', 'Ruby')).click();
      element(by.name('paste')).sendKeys("puts 'Hello world';");

      element(by.buttonText('Save')).click();

      //expect the table to contain the new paste
      const lastRow = element.all(by.tagName('tr')).last();
      expect(lastRow.getText()).toContain("Hello world in Ruby");
}); */

/*

pastebin.po.ts

import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';


export class Pastebin extends Base {

    navigateToHome():promise.Promise<any> {
        return browser.get('/');
    }

    getPastebin():ElementFinder {
        return element(by.css('.pastebin'));
    }

    // Pastebin Heading
    getPastebinHeading(): promise.Promise<string> {
        return this.getPastebin().element(by.css("h2")).getText();
    }

     // Table Data

    getTable():ElementFinder {
        return this.getTable().element(by.css('table'));

    }

    getTableHeader(): promise.Promise<string> {
        return this.getPastebin().all(by.tagName('tr')).get(0).getText();
    }

    getTableRow(): ElementArrayFinder {
        return this.getPastebin().all(by.tagName('tr'));
    }


    getFirstRowData(): promise.Promise<string> {
        return this.getTableRow().get(1).getText();
    }

    getLastRowData(): promise.Promise<string> {
        return this.getTableRow().last().getText();
    }

   // app-add-paste tag

    getAddPasteTag(): ElementFinder {
        return this.getPastebin().element(by.tagName('app-add-paste'));
    }

    isAddPasteTagPresent(): promise.Promise<boolean> {
        return this.getAddPasteTag().isPresent();
    }

} */
/*
 Path: e2e/mainPage.e2e-spec.ts

import { Pastebin } from './page-objects/pastebin.po';
import { browser, protractor } from 'protractor';


//  Scenarios to be Tested
//   1. Pastebin Page should display a heading with text Pastebin Application
//   2. It should have a table header
//   3. The table should have rows
//   4. app-add-paste tag should exist
//

describe('Pastebin Page', () => {

  const mainPage: Pastebin = new Pastebin();

  beforeEach(() => {
      mainPage.navigateToHome();
  });

  it('should display the heading Pastebin Application', () => {

      expect(mainPage.getPastebinHeading()).toEqual("Pastebin Application");


  });

   it('should have a table header', () => {

      expect(mainPage.getTableHeader()).toContain("id Title Language Code");

  })
  it('table should have at least one row', () => {

      expect(mainPage.getFirstRowData()).toContain("Hello world");
  })

  it('should have the app-add-paste tag', () => {
      expect(mainPage.isAddPasteTagPresent()).toBeTruthy();
  })
});
*/
