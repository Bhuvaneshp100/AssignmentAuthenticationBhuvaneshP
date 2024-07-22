import { Page } from 'playwright';
import { expect } from 'playwright/test';

const uicommon = {
async getProductDetails(page: Page, productNameSelector: string, productPriceSelector: string, productLinkSelector: string, productIndex: number) {

    await page.waitForSelector(productNameSelector);
    await page.waitForSelector(productPriceSelector);
    await page.waitForSelector(productLinkSelector);

    const productName = (await page.locator(productNameSelector).nth(productIndex).innerText()).trim();
    const productPrice = (await page.locator(productPriceSelector).nth(productIndex).innerText()).match(/₹\d+(,\d{3})*/)?.[0].trim();
    const productLink = await page.locator(productLinkSelector).nth(productIndex).getAttribute('href');

    expect(productName).not.toBeNull();
    expect(productPrice).not.toBeNull();
    expect(productLink).not.toBeNull();

    console.log('Name:', productName);
    console.log('Price:', productPrice);
    console.log('Link:', productLink);

    return {
        name: productName,
        price: productPrice,
        link: productLink
    };
}

}
export {uicommon} 