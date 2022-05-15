import { Given, When, Then, Before } from "cucumber";
import { calculator } from "../pageObjects/calculator";
import { browser } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";
import { Home } from "../pageObjects/HomePage";
import { Addcustomer } from "../pageObjects/AddCustomer";

var expect = chai.expect;
let calc = new calculator();
let ah = new angularHomePage();
let objHome = new Home();
let objAddCustomer = new Addcustomer();

  Given('I will navigate to Calc Site', async () => {
    await browser.get('http://juliemr.github.io/protractor-demo/');

  });

  Given('I launch the url {string}', async function (url) {
    await browser.get(url).then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(5000)
    })
  })

  Given('I will navigate to {string} page', async (string) => {
    if (string == "calc") {
      await browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
      await browser.get("https://angularjs.org/");
    }

  });

  When('I clicked on header link', async () => {
    await ah.angularLink.click();
  });

  When('you will navigate to angular page', async () => {
    console.log("navigated to new page");
  });

  When('I add two numbers {string} and {string}', async (string, string2) => {

    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
  });

  When('I click on Bank Manager Login', async function () {
    await objHome.btnManagerLogin.click();
});

When('I click on Add customer', async function () {
    await objAddCustomer.addcustomerLink.click();
    await browser.sleep(5000)
});

When('I give the customer details {string}, {string},{string}', async function (fname, lname, postcode) {
    await objAddCustomer.firstName.sendKeys(fname);
    await objAddCustomer.lastName.sendKeys(lname);
    await objAddCustomer.postCode.sendKeys(postcode);
    await browser.sleep(5000)
});

When('I click on Add customer button', async function () {
    await objAddCustomer.AddcustomerButton.click();
    await browser.sleep(5000)
});

  Then('you will enter {string} in search box', async (string) => {
    await browser.sleep(3000);
    await ah.search.sendKeys(string);
  });

  Then('the output displayed should be {string}', async (string) => {
    await calc.go.click();
    await calc.getResult.getText().then(function (text) {

      expect(text).to.equal(string);
    })
  });

  Then('I should get the popup', { timeout: 60 * 1000 }, async function () {
    try {

        await browser.switchTo().alert().getText().then(function (popupmessage) {
            console.log(popupmessage)
            browser.switchTo().alert().accept();
            expect(popupmessage).to.include('Customer added successfully with customer id')

        })
    } catch (error) {
        console.log("Exception in Alert: " + error);
        expect(true).to.equal(false);
    }
});


Before(async function () {
    await browser.manage().deleteAllCookies();
})
