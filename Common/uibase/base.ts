import { Page ,request} from 'playwright';
import {reliancedigital} from '../../ElementFactory/reliancedigital';
import { tatacliq } from '../../ElementFactory/tatacliq';
import { expect } from 'playwright/test';
import { uicommon} from './uicommon';
import data from '../../resource/uiresource/userdetail';

const test=uicommon
const reliancedigitallocate = new reliancedigital();
const tatacliqlocate = new tatacliq();
const uiapplicationHome = {

async performRelianceDigitalAutomation(page: Page) {
    await page.goto(reliancedigitallocate.url);
    console.log("Naviagate to homePage")
    await page.locator(reliancedigitallocate.searchbar).click();
    await page.locator(reliancedigitallocate.searchbar).fill(data.Productname);
    const notifyButton = page.getByRole('button', { name: 'Yes, Notify me' });
    if (await notifyButton.isVisible()) {
    await notifyButton.click();
    console.log("Clcik on Notify button Yes")
    } 
    await page.locator(reliancedigitallocate.searchbar).click();
    await page.getByLabel('Search', { exact: true }).click();
    console.log("Search Product from searchbar anc click on search icon")
    await page.waitForSelector(reliancedigitallocate.productNameSelector);
    console.log("Navigate to Product page")
    await test.getProductDetails(page, reliancedigitallocate.productNameSelector, reliancedigitallocate.productPriceSelector, reliancedigitallocate.productLinkSelector, 2);
    console.log("Verifed Prodcut Name, Price and Link")
    const [prodcutpage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator(reliancedigitallocate.productLinkSelector).nth(2).click()]);
    console.log("Naviagte to cart page")
    await prodcutpage.waitForLoadState();
    await prodcutpage.locator(reliancedigitallocate.pincode).click();
    await prodcutpage.locator(reliancedigitallocate.pincode).fill(data.postalcode);
    await prodcutpage.locator(reliancedigitallocate.addtocat).click();
    console.log("Added Book to cart")
    await expect(prodcutpage.getByRole('button', { name: 'CHECKOUT' })).toBeVisible();
    await prodcutpage.locator(reliancedigitallocate.checkoutbutton).click();
    console.log("Naviagte to checkout page")
  },
  
  async PerformtatacliqAutomation(page:Page){
    await page.goto(tatacliqlocate.url);
    console.log("Naviagate to homePage")
    const notifyButton =page.getByRole('button', { name: 'Yes, I\'m on Board' });
    if (await notifyButton.isVisible()) {
      await notifyButton.click();
      console.log("Clcik on Yes, I\'m on Board")
      } 
    await page.locator(tatacliqlocate.searchbar).click();
    console.log("Search Product from searchbar anc click on search icon")
    await page.locator(tatacliqlocate.searchbar).fill(data.Productname);
    await page.locator(tatacliqlocate.searchbar).press('Enter');
    console.log("Navigate to Product page")
    await test.getProductDetails(page,tatacliqlocate.productNameSelector, tatacliqlocate.productPriceSelector, tatacliqlocate.productLinkSelector, 2);
    console.log("Verifed Prodcut Name, Price and Link")
    const link =page.locator(tatacliqlocate.Prorductlink).nth(3);
    const [productpage] = await Promise.all([
      page.context().waitForEvent('page'),
      link.click({ force: true })
    ]);
    await expect(productpage.getByText(tatacliqlocate.addtobagtext)).toBeVisible();
    await productpage.locator(tatacliqlocate.addtocat).nth(2).click();
    await expect(productpage.locator(tatacliqlocate.addtocat).nth(2)).toBeVisible();
    await productpage.locator(tatacliqlocate.addtocat).nth(2).click();
    console.log("Naviagte to cart page")
    await productpage.getByText(tatacliqlocate.checkoutbutton).click();
    console.log("Naviagte to checkout page")
  },
}
export default { uiapplicationHome };


