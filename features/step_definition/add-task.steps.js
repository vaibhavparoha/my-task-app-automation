var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
browser.waitForAngularEnabled(false);
let EC = ExpectedConditions;
module.exports = function () {


    this.Given(/^User enter "([^"]*)" in text box$/, function (taskName, callback) {
        var ele = element(by.id('txt-task'));
        let condition = EC.visibilityOf(ele)
        browser.wait(condition, 30000)
        ele.sendKeys(taskName).then(function () {
            callback();
        });

    });



    this.When(/^User clicks of Add button$/, function (callback) {
        var ele = element(by.id('btn-add-task'));
        let condition = EC.visibilityOf(ele)
        browser.wait(condition, 30000)
        ele.click().then(function () {
            callback();
        });

    });


    this.Then(/^New Task "([^"]*)" should be added in task list$/, function (taskName) {
        let ele = element.all(by.css('.sc-ifAKCX'));
        let condition = EC.visibilityOf(ele)
        browser.wait(condition, 30000)
        ele.getText().then(function (text) {
            expect(text[0]).to.equal(taskName);

        });
    });

}