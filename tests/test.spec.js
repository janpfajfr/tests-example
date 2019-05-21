import config from "../config";
import { ClientFunction } from "testcafe";
import { Page } from "../page-model";
import { setupMaxPrice, setupMinPrice, addAllavailibleToCart } from "../helpers";

const getPageUrl = ClientFunction(() => window.location.href);
const page = new Page();

fixture`Test example`.page`${config.baseUrl}`;
test("Add the most expensive and the least expensive item to your shopping cart", async t => {
  await t
    .click(page.mobilePhones)
    .expect(getPageUrl()).contains("mobily");
  await setupMaxPrice(t);
  
  await addAllavailibleToCart(t);
  
  await setupMinPrice(t);
  
  await addAllavailibleToCart(t);
  
  await t  
    .click(page.cart)
    .expect(page.step1.hasClass("sel")).ok()
    .expect(page.step2.hasClass("sel")).notOk()
    .expect(page.step3.hasClass("sel")).notOk()
    
    .click(page.continueBtn)
    .expect(page.step1.hasClass("sel")).notOk()
    .expect(page.step2.hasClass("sel")).ok()
    .expect(page.step3.hasClass("sel")).notOk();
    
});
