import { browser, by, element } from 'protractor';

describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () =>  {
        expect(browser.getTitle()).toEqual("Angular 2 App | ng2-webpack");
    });

    it('should have <header>', () =>  {
        expect(element(by.css('my-app header')).isPresent()).toEqual(true);
    });

    it('should have <main>', () =>  {
        expect(element(by.css('my-app main')).isPresent()).toEqual(true);
    });

    it('should have a main title', () =>  {
        expect(element(by.css('main h1')).getText()).toEqual('Hello from Angular 2!');
    });

    it('should have <footer>', () =>  {
        expect(element(by.css('my-app footer')).getText()).toEqual("Webpack Angular 2 Starter");
    });

});
