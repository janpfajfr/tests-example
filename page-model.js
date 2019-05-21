
import { Selector } from "testcafe";

export class Page {
  constructor() {
    this.mobilePhones = Selector('.bx').withText('Mobilní telefony')
    this.game = Selector('.name').withText('Hry')
    this.fromExpTab = Selector('#ui-id-4');
    this.fromLessExpTab = Selector('#ui-id-5');
    this.cart = Selector('#price');
    this.buy = Selector('.btnk1');
    this.loginBtn = Selector('#lblLogin');
    this.submitOrdrerBtn = Selector('#hlOrder');
    this.closeBtn = Selector('.close');
    this.username = Selector('#i_name');
    this.password= Selector('#i_psw');
    this.submitBtn = Selector('#btnLogin');
    this.minValue = Selector('.js-min-value');
    this.maxValue = Selector('.js-max-value');
    this.continueBtnTo = Selector('.btnx').withText('Pokračovat do košíku'); 
    this.backToBtn = Selector('.btnx').withText('Zpět ke zboží'); 
    this.continueBtn = Selector( '.btnx').withText('Pokračovat'); 
    this.step1 = Selector('.first a').withText('Košík')
    this.step2 = Selector('.m.m2')
    this.step3 = Selector('.m.m3')    
    this.showPasswordBtn = Selector('[data-cy="eye-icon"]');
    this.errorMsg = Selector('[data-cy="error-loginError"]');
    this.errorMsgOut = Selector('[data-cy="error-signOut"]');
  }
}
