import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";
import { calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";

describe('Validating Angular', () => {


    it('Open Angular js website', async () => {

        let calc = new calculator();

        await browser.get('http://juliemr.github.io/protractor-demo/');
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
         await calc.go.click();
         calc.getResult.getText().then(function (text) {
             console.log(text);
        })

    })


    it('Angular home page title validation', async () => {
        let ah = new angularHomePage();
        await browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");

    })

})
