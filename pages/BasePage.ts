import {Page,Locator,expect} from"@playwright/test";

export class BasePage{
    constructor(protected readonly page:Page){
        
    }
async openurl(url:string):Promise<void>{
    await this.page.goto(url);
    await this.page.waitForTimeout(2000);
}

get serchbox():Locator{
    return this.page.locator(`[data-testid="nav-search"]`)
}

get wishlist():Locator{
    return this.page.getByText(` Wishlist`);
}
    get cart():Locator{
        return this.page.getByText(` Cart`);
    }
    get signin():Locator{
        return this.page.getByText(` Sign in`);
    }

    async searchproduct(product:string):Promise<void>{
        await this.serchbox.fill('product');
    }
        async clicksigninboutton():Promise<void>{
      await this.signin.click();
      
     }
     
}
