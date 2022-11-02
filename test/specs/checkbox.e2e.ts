import checkboxPage from "../pageobjects/checkbox.page"

describe.skip("check box validation", async function() {
     it("checkbox 1 validation", async function(){
        console.log("################################################################################");
       await checkboxPage.open();
        await browser.pause(10000);
        await checkboxPage.ckickOnCheckbox(1);
       // expect (checkboxPage.isChekboxIsSelected(1)).toBe(true);
        await checkboxPage.ckickOnCheckbox(2);
       // expect (checkboxPage.isChekboxIsSelected(2)).toBe(false);
        await browser.pause(10000);
    
     })
})