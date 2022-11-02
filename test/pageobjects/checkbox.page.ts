import page from './page';

 class checkBoxPage extends page{

private get getCheckbox1(){
    return $('//form[@id="checkboxes"]/input[1]');
}
private get getCheckbox2(){
    return $('//form[@id="checkboxes"]/input[2]');
}
private get getCheckbox(){
    return $$('//form[@id="checkboxes"]/input');
}

public open(): Promise<string>{
    return super.open('/checkboxes');
}

public async ckickOnCheckbox(checkbox: number){
    if(checkbox=== 1){
        await this.getCheckbox1.click();
        expect(await this.getCheckbox1.isSelected()).toBe(true);
    }
    else if (checkbox=== 2) {
        await this.getCheckbox2.click();
    }
    else {
     
        console.log("Please check the checkbox count");
    }
}
public async isChekboxIsSelected(checkbox:number){
    let flag=false;
    if(checkbox=== 1){
        return await this.getCheckbox1.isSelected();
    }
    else if (checkbox=== 2) {
        return await this.getCheckbox1.isSelected();
    }
    else {
        console.log("Please check the checkbox count");
    }
    
    
}

}
export default new checkBoxPage();