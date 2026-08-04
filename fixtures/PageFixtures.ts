import{test as actual, expect}from "@playwright/test";
import { BasePage} from "../pages/BasePage";

import { SiginPage } from "../pages/SigninPage";

type pages={
    Base:BasePage;
    Sign:SiginPage;
}

export const test=actual.extend<pages>({
    Base:async({page},use)=>{
await use(new BasePage(page));
    
},
    Sign:async({page},use)=>{
        // const Sign=new SignPage(page);
        // await use (Sign);
await use(new SiginPage(page))
    },
});

export {expect};