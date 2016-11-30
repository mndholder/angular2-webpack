import {browser, protractor, ElementFinder} from 'protractor';
let condition = protractor.ExpectedConditions;
let DEFAULT_CONDITION_TIMEOUT = 60000;

declare const allure: {
    _allure;
    startStep(s2: string);
    endStep(s2: string);
    createAttachment(message: string, p: () => Buffer, s2: string);
};

export default class CommonActions {

    // <editor-fold defaultstate="collapsed" desc="browser">
    public ignoreSynchronization(func): void {
        browser.ignoreSynchronization = false;
        func();
        browser.ignoreSynchronization = true;
    };

    public openPage(URL: string, pageName: string): void {
        browser.get(URL);
        this.log(pageName + ' page has been opened');
    };

    public refreshPage(pageName: string): void {
        browser.refresh();
        this.log(pageName + ' page has been refreshed');
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="report">
    public log(message: string): void {
        browser.controlFlow().execute(() => {
            allure._allure.startStep(message);
            console.log(message);
            allure._allure.endStep('passed');
        });
    };

    public screenshot(message: string): void {
        this.ignoreSynchronization(() => {
            return browser.takeScreenshot()
                .then((png) => {
                    allure.createAttachment(message, () => {
                        return new Buffer(png, 'base64');
                    }, 'image/png')();
                });
        });
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="states">
    public isPresent(element: ElementFinder, logName: string): void {
        expect(element.isPresent()).toBeTruthy(logName + ' is not present');
    };

    public isNotPresent(element: ElementFinder, logName: string): void {
        expect(element.isPresent()).toBeFalsy(logName + ' is present but it should not be');
    };

    public isDisplayed(element: ElementFinder, logName: string): void {
        expect(element.isDisplayed()).toBeTruthy(logName + ' is not displayed');
    };

    public isNotDisplayed(element: ElementFinder, logName: string): void {
        expect(element.isDisplayed()).toBeFalsy(logName + ' is displayed but it should not be');
    };

    public isSelected(element: ElementFinder, logName: string): void {
        expect(element.isSelected()).toBeTruthy(logName + ' is not selected');
    };

    public isNotSelected(element: ElementFinder, logName: string): void {
        expect(element.isSelected()).toBeFalsy(logName + ' is selected but it should not be');
    };

    public isEnabled(element: ElementFinder, logName: string): void {
        expect(element.getAttribute('disabled')).toBeFalsy(logName
            + ' is disabled but it should not be');
    };

    public isDisabled(element: ElementFinder, logName: string): void {
        expect(element.getAttribute('disabled')).toBeTruthy(logName
            + ' is enabled but it should not be');
    };

    public isEmptyField(element: ElementFinder, logName: string): void {
        expect(element.getAttribute('value')).toEqual('', logName + ' is not empty');
    };

    public isTextEquals(element: ElementFinder, text: string, logName: string): void {
        expect(element.getText()).toEqual(text, logName + ' has incorrect text');
    };

    public isTextContains(element: ElementFinder, text: string, logName: string): void {
        expect(element.getText()).toContain(text, logName + ' has incorrect text');
    };

    public isTextContainsCaseInsensitive(element: ElementFinder, text: string, logName: string): void {
        element.getText()
            .then((txt) => {
                expect(txt.toLowerCase()).toContain(txt.toLowerCase(), logName + ' has incorrect text');
            });
    };

    public isValueEquals(element: ElementFinder, text: string, logName: string): void {
        expect(element.getAttribute('value')).toEqual(text, logName + ' has incorrect value');
    };

    public isTitleEquals(title: string, logName: string): void {
        expect(browser.getTitle()).toEqual(title, logName + ' has incorrect title');
    };

    public isUrlEquals(url: string, logName: string): void {
        expect(browser.getCurrentUrl()).toEqual(url, logName + ' is not loaded');
    };

    public isBackgroundColorEquals(element: ElementFinder, color: string, logName: string): void {
        expect(element.getCssValue('background-color')).toEqual(color, logName + ' has invalid color');
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="waits">
    waitUntilIsVisible(element) {
        this.ignoreSynchronization(() => {
            let visibility = condition.visibilityOf(element);
            return browser.wait(visibility, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
                + element.locator() + ' is not visible');
        });
    };

    waitUntilIsNotVisible(element) {
        this.ignoreSynchronization(() => {
            let visibility = condition.invisibilityOf(element);
            return browser.wait(visibility, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
                + element.locator() + ' is visible but it should not be');
        });
    };

    waitUntilIsClickable(element) {
        this.ignoreSynchronization(() => {
            let clickability = condition.elementToBeClickable(element);
            return browser.wait(clickability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
                + element.locator() + ' is not clickable');
        });
    };

    waitUntilIsNotClickable(element) {
        this.ignoreSynchronization(() => {
            let clickability = condition.not(condition.elementToBeClickable(element));
            return browser.wait(clickability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
                + element.locator() + ' is clickable but it should not be');
        });
    };

    waitUntilIsPresent(element) {
        this.ignoreSynchronization(() => {
            let presentability = condition.presenceOf(element);
            return browser.wait(presentability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
                + element.locator() + ' is not present');
        });
    };

    waitUntilIsNotPresent(element) {
        this.ignoreSynchronization(() => {
            let presentability = condition.not(condition.presenceOf(element));
            return browser.wait(presentability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
                + element.locator() + ' is present but it should not be');
        });
    };

    waitUntilIsDisabled(element) {
        this.ignoreSynchronization(() => {
            return browser.wait(() => {
                return element.getAttribute('disabled')
                    .then((disabled) => {
                        return (disabled);
                    });
            }, DEFAULT_CONDITION_TIMEOUT,  'Element with locator '
                + element.locator() + ' is not disabled but it should');
        });
    };

    waitUntilIsEnabled(element) {
        this.ignoreSynchronization(() => {
            return browser.wait(() => {
                return element.getAttribute('disabled')
                    .then((disabled) => {
                        return (!disabled);
                    });
            }, DEFAULT_CONDITION_TIMEOUT,  'Element with locator '
                + element.locator() + ' is not enabled but it should');
        });
    };

    waitUntilTextOfElementEqualTo(element: ElementFinder, text: string) {
        this.ignoreSynchronization(() => {
            let presentability = condition.textToBePresentInElement(element, text);
            return browser.wait(presentability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
                + element.locator() + ' and text ' + text + ' is not present');
        });
    };

    waitForUrlToChangeTo(expectedUrl) {
        this.ignoreSynchronization(() => {
            return browser.wait(() => {
                return browser.getCurrentUrl()
                    .then((url) => {
                        return (url === expectedUrl);
                    });
            }, DEFAULT_CONDITION_TIMEOUT, 'Url has not changed to "' + expectedUrl + '"');
        });
    };

    waitForTitleToChangeTo(expectedTitle) {
        this.ignoreSynchronization(() => {
            return browser.wait(() => {
                return browser.getTitle()
                    .then((title) => {
                        return (title === expectedTitle);
                    });
            }, DEFAULT_CONDITION_TIMEOUT, 'Title has not changed to "' + expectedTitle + '"');
        });
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="actions">
    public click(element: ElementFinder, elementName: string): void {
        element.click();
        this.log('Clicked on the element: ' + elementName);
    };

    public sendKeys(element: ElementFinder, elementName: string, text: string): void {
        element.sendKeys(text);
        this.log('Sent text: "' + text + '" to element: ' + elementName);
    };

    public sendKeysByTurns(element: ElementFinder, elementName: string, text: string): void {
        text.split('').forEach((symbol) => {
            element.sendKeys(symbol);
        });
        this.log('Sent text: "' + text + '" to element: ' + elementName);
    };

    public clear(element: ElementFinder, elementName: string): void {
        element.getAttribute('value')
            .then((text) => {
                let length = text.length;
                let backspaceSeries = Array(length).join(protractor.Key.BACK_SPACE);
                element.sendKeys(backspaceSeries);
            })
            .then(() => {
                this.log('Remove text in element: "' + elementName + '"');
            });
    };
    // </editor-fold>
}
