const {expect}=require('@playwright/test')
class BasePage{
    constructor(page)
    {
        this.page=page;
    }

    async goto(url)
    {
        await this.page.goto(url);
    }

    async getTitle()
    {
        return await this.page.title();
    }

    async getUrl()
    {
        return await this.page.url();
    }

    async wait(time)
    {
        await this.page.waitForTimeout(time);
    }

    async waitForLoadState(){
        return await this.page.waitForLoadState();
    }

    async waitForNavigation(){
        return await this.page.waitForNavigation();
    }
    
    async waitAndClick(selector) {
    return await this.page.click(selector);
    }

    async waitAndFill(selector,text){
        return await this.page.fill(selector,text);
    }

    async selectValueFromDropdown(selector, text) {
    const dropdown = await this.page.locator(selector);
    return await dropdown.selectOption({ value: text });
    }

    async verifyElementText(selector,text)
    {
        const textvalue=await this.page.locator(selector).textContent();
        expect(textvalue).toBe(text);
    }

    async verifyElementContainsText(selector,text)
    {
        const locatortext=await this.page.locator(selector)
        expect(locatortext).toContainText(text);
    }

    async isElementVisible(selector,errorMessage)
    {
        try{
        const isvisible=await this.page.isVisible(selector);
        return isvisible;
        }
        catch(error){
        console.log(errorMessage);
        return false;
        }
    }

    async isElementHidden(selector,errorMessage)
    {
        try{
        const ishidden=await this.page.isHidden(selector);
        return ishidden;
        }
        catch(error){
        console.log(errorMessage);
        return false;
        }
    }

    async isElementEnabled(selector,errorMessage)
    {
        try{
            const isenabled=await this.page.isEnabled(selector)
            return isenabled;
        }
        catch(error){
            console.log(errorMessage);
            return false;
        }
        
    }

    async enterText(selector,text,errorMessage){
        try{
            await this.page.fill(selector,text);
        }
        catch(error){
            console.log(errorMessage);
        }
    }

    async clickElement(selector,errorMessage){
        try{
            
            await this.page.click(selector);
        }
        catch(error){
            console.log(errorMessage);
        }
    }
}

module.exports=BasePage;
