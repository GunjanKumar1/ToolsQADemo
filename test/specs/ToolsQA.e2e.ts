import ToolsQaPage from "../pageobjects/ToolsQA/ToolsQa.page"

describe('verify Tools qa', async function(){
    it('Verify home page title is ToolsQA', async function(){
     
        await ToolsQaPage.open();
        await ToolsQaPage.verifyTitle();
    })

    it('Verify sub items are expender by default or all card items', async function(){
     
        await ToolsQaPage.open();
        await ToolsQaPage.verifyTitle();
        await ToolsQaPage.switchToFrame();
        await ToolsQaPage.clickOnElementCard();
        await ToolsQaPage.switchToParent();
        await ToolsQaPage.switchToFrame();
        await ToolsQaPage.verfyElementPageTitle();
        await ToolsQaPage.verifyEleManuExpanded();
        await ToolsQaPage.verifyItemsInSubMenuDisplayed();
        await ToolsQaPage.clickOnCloapsIconOfElementMenue();
        await ToolsQaPage.verifyItemsInSubMenuNotDisplayed();
    })

    it('Fill text box form and Submit', async function(){
     
        await  ToolsQaPage.open();
        await ToolsQaPage.verifyTitle();
        await ToolsQaPage.switchToFrame();
        await ToolsQaPage.clickOnElementCard();
        await ToolsQaPage.switchToParent();
        await ToolsQaPage.switchToFrame();
        await ToolsQaPage.verfyElementPageTitle();
        await ToolsQaPage.verifyEleManuExpanded();
        await ToolsQaPage.clickOnTexBoxMenuItem();
        await ToolsQaPage.fillTextBoxForm();
        await ToolsQaPage.verifyTextboxFormAfterSubmit();
        
    })
})