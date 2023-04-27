const {By,Key, Builder} = require("selenium-webdriver")
require("chromedriver")

async function test_case(){
   
   // driver creation
   let driver = await new Builder().forBrowser("chrome").build();

   // driver to website
   await driver.get("https://github.com")

   //grab element from page
   await driver.findElement(By.partialLinkText("Sign in")).click();
   await driver.manage().setTimeouts( { implicit: 10000 } );


    await driver.findElement(By.name("login")).sendKeys("askobasko");
    await driver.findElement(By.name("password")).sendKeys("oogabooga",Key.RETURN);
    
}
test_case()