import page from "../page";
import * as EC from 'wdio-wait-for';

class ToolsQAPage extends page{
    private get pageTitle(){
        return $('//div[@id="app"]/header/a/img');
    }
    private get elementCard(){
        return $('h5=Elements')
    }
    public get Iframeid(){
        return $('//iframe[@id="aswift_0"]');
    }
    private get elementPageHeader(){
        return $('.main-header');
    }
    private get elementMenuAttribute(){
        return $('//div[@class="element-group"]/descendant::*[text()="Elements"]/../../following-sibling::div');
    }
    private get subMenuLinkText(){
        return $$('//div[@class="element-group"]/descendant::*[text()="Elements"]/../../following-sibling::div/descendant::li/span');
    }
    private get elemetMenuCollapseIcon(){
        return $('//div[@class="element-group"]/descendant::*[text()="Elements"]/following-sibling::div/div[@class="icon"]');
    }
    private get fullNameTextBox(){
        return $('#userName');
    }
    private get userEmailTextBox(){
        return $('#userEmail');
    }
    private get currAddressTextBox(){
        return $('#currentAddress');
    }
    private get perAddressTextBox(){
        return $('#permanentAddress');
    }
    private get submitButton(){
        return $('#submit');
    }
    private get fullNmaeTextBoxValue(){
        return $('#app').shadow$('#userName');
    }

    public open() {
        return super.open("");
        
    }

    public async verifyTitle(){
       
        let title=await browser.getTitle();
        browser.waitUntil(EC.elementToBeEnabled('input'));
        expect(title ).toEqual("ToolsQA");
    }
    public async clickOnElementCard(){
        await this.elementCard.scrollIntoView();
        browser.waitUntil(EC.elementToBeClickable(this.elementCard));
        await this.elementCard.click();
    }
    public async verfyElementPageTitle(){
        let elementHeader=await this.elementPageHeader.getText();
       expect(elementHeader).toEqual("Elements");
    }

    public async verifyEleManuExpanded(){
        let ElementmenuExp= await this.elementMenuAttribute.getAttribute('class');
       expect(ElementmenuExp).toEqual('element-list collapse show');
    }
    public async verifyItemsInSubMenuDisplayed(){
        let subMenuLinkText1=new Array();
        await this.subMenuLinkText.forEach(async(element) => {
        if(await element.getText()==='Text Box'){
          expect(await element.isDisplayed()).toBe(true);
        }
        else if(await element.getText()==='Check Box'){
          expect(await element.isDisplayed()).toBe(true); 
        }
      })
    }
    public async verifyItemsInSubMenuNotDisplayed(){
        let subMenuLinkText1=new Array();
      await this.subMenuLinkText.forEach(async(element) => {
        if(await element.getText()==='Text Box'){
          expect(await element.isDisplayed()).toBe(false);
        }
        else if(await element.getText()==='Check Box'){
          expect(await element.isDisplayed()).toBe(false); 
        }
      })
    }
    public async clickOnCloapsIconOfElementMenue(){
        await this.elemetMenuCollapseIcon.click();
    }

    public async clickOnTexBoxMenuItem(){
        await this.subMenuLinkText.forEach(async(element) => {
            if(await element.getText()==='Text Box'){
                await element.click();
            }
          })
    }
    public async fillTextBoxForm(){
        await this.fullNameTextBox.scrollIntoView();
        await this.fullNameTextBox.setValue("test1");
        await this.userEmailTextBox.setValue("test@test.com");
        await this.currAddressTextBox.setValue("Current address");
        await this.perAddressTextBox.setValue("Parmanent address");
        await this.submitButton.scrollIntoView();
        expect(await this.submitButton.isClickable()).toBe(true);
        await this.submitButton.click();
    }
    public async verifyTextboxFormAfterSubmit(){
        expect(await this.fullNameTextBox.getValue()).toEqual("test1");
        expect(await this.userEmailTextBox.getValue()).toEqual("test@test.com");
        expect(await this.currAddressTextBox.getValue()).toEqual("Current address");
        expect(await this.perAddressTextBox.getValue()).toEqual("Parmanent address");
    }
    public async switchToFrame(){
        browser.switchToFrame( this.Iframeid);
    }
    public async switchToParent(){
        browser.switchToParentFrame();
    } 
        
    }
export default new ToolsQAPage();
