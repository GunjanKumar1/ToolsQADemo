import UIAction from '../Utility/UIAction';
import Page from './page';
//import UIAction from 'D:/Demo1/test/Utility/UIAction';

class AlertPage extends Page{
    public get headerDetail(){
        return $('//h3[text()="JavaScript Alerts"]');
    }
    public get jsAlertBtn(){
        return $('button=Click for JS Alert');
    }
    public get JsConfirmBtn(){
        return $('button=Click for JS Confirm');
    }
    public get jsPrompetBtn(){
        return $('button=Click for JS Prompt');
    }

    public get confirmMessage(){
        return $('#result')
    }
    public open() {
        return super.open('/javascript_alerts');
    }

    public async verifyHeader(){
        console.log("################**************************")
        const ele= await $('#content').shadow$('.example h3');
        console.log(ele.getValue()+"1333333333333333333333333123");
        await this.headerDetail.waitForDisplayed({timeout:5000});
        expect(await this.headerDetail.isDisplayed()).toBe(true);
        let test1=await (await this.headerDetail).getText();
        console.log(test1+'56666666666666666666666666666666666654654fvhksxai928181');
       
        
      //  await this.jsAlertBtn.click();
      //  await browser.pause(5000);
      // let alertText= await browser.getAlertText();
     //  console.log(alertText+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
       console.log(browser.getUrl()+"########################");
       

    }
    public async getHeader(){
        await this.headerDetail.waitForDisplayed({timeout:5000});
        return await this.headerDetail.getText();
    }

    public async clickOnJSAlert(){
    
        await this.jsAlertBtn.click();
      UIAction.clickOnElement();
    }
    public async clickOnJSConfirm(){
    
        await this.JsConfirmBtn.click();
    }
    public async clickOnJSPrompet(){
    
        await this.jsPrompetBtn.click();
    }

    public async acceptAlert(){
        await browser.acceptAlert();
    }

    public async dismissAlert(){
        await browser.dismissAlert();
    }
    public async getAlertMessage(){
        return browser.getAlertText();
    }
    public async getJSSuccessMessage(){
        await this.confirmMessage.waitForDisplayed({timeout:5000});
        return await this.confirmMessage.getText();
    }

}
 export default new AlertPage();