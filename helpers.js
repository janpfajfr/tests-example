import { Page } from "./page-model";
import { Selector } from "testcafe";

const page = new Page();
export const setupMaxPrice = async t => {
  const maxValue = await page.maxValue.value;
  await t
    .selectText(page.minValue)
    .pressKey("delete")
    .typeText(page.minValue, maxValue)
    .pressKey("enter");
};

export const setupMinPrice = async t => {
  const minValue = "0";
  await t
    .selectText(page.maxValue)
    .pressKey("delete")
    .typeText(page.maxValue, minValue)
    .pressKey("enter")
    .selectText(page.minValue)
    .pressKey("delete")
    .typeText(page.minValue, minValue)
    .pressKey("enter");
};

export const addAllavailibleToCart = async t => {
  const toBuy = Selector(".canBuy");

  const availibleToBuy = await toBuy.count;
  console.log(availibleToBuy);
  for (let i = 0; i < availibleToBuy; i++)
    await t
      .click(page.buy.nth(i))
      .wait(3000)
      .click(page.backToBtn);
};
