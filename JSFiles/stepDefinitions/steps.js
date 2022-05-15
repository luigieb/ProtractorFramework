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
const ace_1 = require("../pageObjects/ace");
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
let ace = new ace_1.ACEHome();
(0, cucumber_1.Given)('I will navigate to ACE UCV Home page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("http://www.ace.ucv.ro/index.php");
}));
(0, cucumber_1.When)('I clicked on Contact link on the home page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ace.contactLink.click();
}));
(0, cucumber_1.Then)('The address for the university is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ace.adress.isPresent();
}));
(0, cucumber_1.Given)('I will navigate to Calc Site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
(0, cucumber_1.Given)('I will navigate to {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
(0, cucumber_1.When)('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.angularLink.click();
}));
(0, cucumber_1.When)('you will navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to new page");
}));
(0, cucumber_1.Then)('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield ah.search.sendKeys(string);
}));
(0, cucumber_1.When)('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
(0, cucumber_1.Then)('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsMERBQXVEO0FBQ3ZELDJDQUFxQztBQUNyQyxvRUFBaUU7QUFDakUsZ0RBQXdCO0FBQ3hCLDRDQUE2QztBQUM3QyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksYUFBTyxFQUFFLENBQUM7QUFFdEIsSUFBQSxnQkFBSyxFQUFDLHNDQUFzQyxFQUFFLEdBQVEsRUFBRTtJQUN0RCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLDRDQUE0QyxFQUFFLEdBQVEsRUFBRTtJQUMzRCxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLDZDQUE2QyxFQUFFLEdBQVEsRUFBRTtJQUM1RCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVJLElBQUEsZ0JBQUssRUFBQyw4QkFBOEIsRUFBRSxHQUFRLEVBQUU7SUFDN0Msb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUVqRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxnQkFBSyxFQUFDLGtDQUFrQyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDeEQsb0VBQW9FO0lBQ3RFLElBQUcsTUFBTSxJQUFFLE1BQU0sRUFDakI7UUFDRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7S0FDaEU7U0FDSSxJQUFJLE1BQU0sSUFBRSxXQUFXLEVBQzVCO1FBQ0UsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQzdDO0FBRUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtJQUN6QyxvRUFBb0U7SUFFcEUsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGVBQUksRUFBQyxtQ0FBbUMsRUFBRSxHQUFRLEVBQUU7SUFDbEQsb0VBQW9FO0lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxlQUFJLEVBQUMsdUNBQXVDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUM1RCxvRUFBb0U7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyx5Q0FBeUMsRUFBRyxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUN4RSxvRUFBb0U7SUFHcEUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHWCxJQUFBLGVBQUksRUFBQyx5Q0FBeUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3ZELG9FQUFvRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7UUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=