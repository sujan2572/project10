import{test,expect}from"../fixtures/PageFixtures";
import { newuser } from "../data/userdata";
test('verify register',async({Sign})=>{
    await Sign.openurl('https://buildbuddy50.github.io/novastore/');
    await Sign.clicksigninboutton();
    await Sign.clickcoustomurbutton();
    await Sign.clickcreataccountbutton();
    const alldata=newuser()
    await Sign.coustmordetails(alldata.fullname,alldata.email,alldata.password,alldata.confirmpassword);

})