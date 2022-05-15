
import {After,Before, Status} from "cucumber";
import { browser } from "protractor";

Before({tags: "@calculatortesting"}, function () {
  // maximize the window before testing
  browser.manage().window().maximize();
});

After({tags: "@calculatortesting"}, function () {
    // logging in completion
    console.log("Calculator Test is completed");
  });

Before({tags: "@AngularTesting"}, function () {
  console.log("Testing Angular Official Site");
});

After(async function(scenario) {
  console.log("Test is completed");
  if (scenario.result.status=== Status.FAILED)
  {
    //code to take screesnhot
   const screenshot= await browser.takeScreenshot();
 
        this.attach(screenshot,"image/png");
  }

});





