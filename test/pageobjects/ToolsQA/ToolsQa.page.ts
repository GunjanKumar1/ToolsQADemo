import page from "../page";

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
        browser.switchToFrame( this.Iframeid);
        let tit= await this.pageTitle.getAttribute('src');
        expect( await this.pageTitle.getAttribute('src')).toContain("Toolsqa");
    }
    public async clickOnElementCard(){
        await (await this.elementCard).scrollIntoView();
        await this.elementCard.click();
        await browser.pause(5000);
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
        await browser.pause(3000);
    }

    public async clickOnTexBoxMenuItem(){
        await this.subMenuLinkText.forEach(async(element) => {
            if(await element.getText()==='Text Box'){
                await element.click();
            }
          })
    }
    public async fillTextBoxForm(){
        await (await this.fullNameTextBox).scrollIntoView();
        await (await this.fullNameTextBox).setValue("test1");
        await (await this.userEmailTextBox).setValue("test@test.com");
        await (await this.currAddressTextBox).setValue("Current address");
        await (await this.perAddressTextBox).setValue("Parmanent address");
        await (await this.submitButton).scrollIntoView();
        expect(await this.submitButton.isClickable()).toBe(true);
        await (await this.submitButton).click();
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


    public async getHeader(){
        browser.switchToFrame( this.Iframeid);
       let tit= await this.pageTitle.getAttribute('src');
       
       expect( await this.pageTitle.getAttribute('src')).toContain("Toolsqa");
      // let title=await this.pageTitle.getText(); 
       console.log(tit+"323333333333333333333333333333333333333333333333333333");
       
       await (await this.elementCard).scrollIntoView();
       await this.elementCard.click();
       await browser.pause(10000);
       browser.switchToParentFrame();
       browser.switchToFrame( this.Iframeid);
       let elementHeader=await this.elementPageHeader.getText();
       console.log(elementHeader+"#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$");
      expect(elementHeader).toEqual("Elements");
      let ElementmenuExp= await this.elementMenuAttribute.getAttribute('class');
      console.log(ElementmenuExp);
      expect(ElementmenuExp).toEqual('element-list collapse show');
      let subMenuLinkText1=new Array();
      await this.subMenuLinkText.forEach(async(element) => {
       // subMenuLinkText1.push(await element.getText());
        console.log(await element.getText()+'********************************************');
        if((await element.getText()==='Text Box') || (await element.getText()==='Check Box')){
            console.log(await element.getText()+'%%%%%%%%%%%%%%^^^^^^^^^^^^^^^^^^^');
            subMenuLinkText1.push(await element.getText());
        }
      })
      console.log(subMenuLinkText1.length+'  *********0000000000++++++++++++++++++++++++++++***********');
        expect(subMenuLinkText1.length).toEqual(2);
        await this.subMenuLinkText.forEach(async(element) => {
             if(await element.getText()==='Text Box'){
                 await element.click();
             }
           })
           await browser.pause(10000);

    }
        
    }
export default new ToolsQAPage();
