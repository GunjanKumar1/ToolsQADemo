import AlertPage from "../pageobjects/Alert.page"


describe.skip("Alert Test",async function() {
    it("Verify alert header" , async function () {
        await AlertPage.open();
      expect(await AlertPage.getHeader()).toEqual('JavaScript Alerts');
    })

    it("verify JSAlert Popup & Success Message", async function() {
        await  AlertPage.open();
        await AlertPage.clickOnJSAlert();
        await browser.pause(10000);
        expect(await AlertPage.getAlertMessage()).toEqual('I am a JS Alert');
        await AlertPage.acceptAlert();
        let jsSusscessMessage=await AlertPage.getJSSuccessMessage();
        expect(jsSusscessMessage).toEqual('You successfully clicked an alert');
    })
    
})