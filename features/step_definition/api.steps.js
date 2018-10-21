var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
browser.waitForAngularEnabled(false);
let EC = ExpectedConditions;
module.exports = function () {
    this.Given(/^User go to my task app$/, function (callback) {
        browser.get('http://localhost:3000/');
        callback();
    });

    this.Then(/^user see all task loaded$/, function (callback) {
        var ele = element(by.id('task_1'));
        let condition = EC.visibilityOf(ele)
        browser.wait(condition, 30000)
        ele.getText().then(function (text) {
            expect(text).to.equal('delectus aut autem');
            callback();
        })

    });
}