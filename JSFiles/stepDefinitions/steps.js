"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
const HomePage_1 = require("../pageObjects/HomePage");
const AddCustomer_1 = require("../pageObjects/AddCustomer");
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
let objHome = new HomePage_1.Home();
let objAddCustomer = new AddCustomer_1.Addcustomer();
(0, cucumber_1.Given)('I will navigate to Calc Site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
(0, cucumber_1.Given)('I launch the url {string}', function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.driver.manage().window().maximize();
                yield protractor_1.browser.sleep(5000);
            });
        });
    });
});
(0, cucumber_1.Given)('I will navigate to {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
(0, cucumber_1.When)('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ah.angularLink.click();
}));
(0, cucumber_1.When)('you will navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("navigated to new page");
}));
(0, cucumber_1.When)('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
(0, cucumber_1.When)('I click on Bank Manager Login', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objHome.btnManagerLogin.click();
    });
});
(0, cucumber_1.When)('I click on Add customer', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.addcustomerLink.click();
        yield protractor_1.browser.sleep(5000);
    });
});
(0, cucumber_1.When)('I give the customer details {string}, {string},{string}', function (fname, lname, postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.firstName.sendKeys(fname);
        yield objAddCustomer.lastName.sendKeys(lname);
        yield objAddCustomer.postCode.sendKeys(postcode);
        yield protractor_1.browser.sleep(5000);
    });
});
(0, cucumber_1.When)('I click on Add customer button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.AddcustomerButton.click();
        yield protractor_1.browser.sleep(5000);
    });
});
(0, cucumber_1.Then)('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield ah.search.sendKeys(string);
}));
(0, cucumber_1.Then)('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
(0, cucumber_1.Then)('I should get the popup', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield protractor_1.browser.switchTo().alert().getText().then(function (popupmessage) {
                console.log(popupmessage);
                protractor_1.browser.switchTo().alert().accept();
                expect(popupmessage).to.include('Customer added successfully with customer id');
            });
        }
        catch (error) {
            console.log("Exception in Alert: " + error);
            expect(true).to.equal(false);
        }
    });
});
(0, cucumber_1.Before)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBcUQ7QUFDckQsMERBQXVEO0FBQ3ZELDJDQUFxQztBQUNyQyxvRUFBaUU7QUFDakUsZ0RBQXdCO0FBQ3hCLHNEQUErQztBQUMvQyw0REFBeUQ7QUFFekQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLEVBQUUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQUksRUFBRSxDQUFDO0FBQ3pCLElBQUksY0FBYyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXJDLElBQUEsZ0JBQUssRUFBQyw4QkFBOEIsRUFBRSxHQUFTLEVBQUU7SUFDL0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBRWpFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGdCQUFLLEVBQUMsMkJBQTJCLEVBQUUsVUFBZ0IsR0FBRzs7UUFDcEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUN4QixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzdCLENBQUM7U0FBQSxDQUFDLENBQUE7SUFDSixDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsSUFBQSxnQkFBSyxFQUFDLGtDQUFrQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDekQsSUFBSSxNQUFNLElBQUks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