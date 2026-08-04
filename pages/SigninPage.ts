import {Page,Locator,expect}from '@playwright/test';
import { BasePage } from './BasePage';

export class SiginPage extends BasePage{
    constructor(protected readonly page:Page){
    super(page)
}

get coustomurbutton():Locator{
    return this.page.locator('[data-testid="auth-role-user"]');
}

get email():Locator{
    return this.page.locator('[data-testid="auth-email"]');
}
get password():Locator{
    return this.page.locator('[data-testid="auth-password"]');
}
get creataccount():Locator{
  return this.page.locator('[data-testid="auth-toggle-mode"]');
}

get fullname():Locator{
    return this.page.locator('[data-testid="auth-name"]');
    
}
get creatmail():Locator{
    return this.page.locator('[data-testid="auth-email"]');
    
}

get creatpassword ():Locator{
    return this.page.locator('[data-testid="auth-password"]');
    
}

get creatConfirmpassword ():Locator{
    return this.page.locator('[data-testid="auth-confirm"]');
    
}

get submmitaccount ():Locator{
    return this.page.locator('[data-testid="auth-submit"]');
    
}
//
async clickcoustomurbutton():Promise<void>{
    await this.coustomurbutton.click();
   
}

async clickcreataccountbutton():Promise<void>{
    await this.creataccount.click();
}

async coustmordetails(fullname:string,email:string,password:string,confirmpassword:string):Promise<void>{
   await this.fullname.fill(fullname);
   await this.creatmail.fill(email);
   await this.creatpassword.fill(password);
   await this.creatConfirmpassword.fill(confirmpassword);
   await this.submmitaccount.click();
}
async customersigndetels(email:string,password:string):Promise<void>{
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submmitaccount.click();

}}