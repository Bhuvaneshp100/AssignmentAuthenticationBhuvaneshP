class tatacliq{
    url:string;
    productNameSelector:string;
    productPriceSelector:string;
    productLinkSelector:string;
    searchbar:string;
    searchbutton:string;
    addtocat:string;
    link:string;
    searchtext:string;
    notification:string;
    Prorductlink:string;
    checkoutbutton:string;
    addtobagtext:string;

    constructor(){
    this.url='https://www.tatacliq.com/'
    this.productNameSelector = '//*[contains(@class, "ProductDescription__description")]';
    this.productPriceSelector = '//*[contains(@class, "ProductDescription__content")]//div//h3';
    this.productLinkSelector = '//div[contains(@class, "ProductModule__imageAndDescriptionWrapper")]//a';
    this.searchbar='[data-test="control-input-field"]';
    this.searchbutton='#search';
    this.searchtext='search';
    this.addtocat='[data-test="button-main-div"]';
    this.link='href';  
    this.notification='button:has-text("Allow")'; 
    this.Prorductlink='//div[contains(@class, "ProductModule__imageAndDescriptionWrapper")]//a';
    this.checkoutbutton='Checkout';
    this.addtobagtext='ADD TO BAG'
    }
}

export{tatacliq}

