class reliancedigital{
    url:string;
    productNameSelector:string;
    productPriceSelector:string;
    productLinkSelector:string;
    searchbar:string;
    searchbutton:string;
    addtocat:string
    link:string
    pincode:string
    checkoutbutton:string;

    constructor(){
    this.url='https://www.reliancedigital.in/'
    this.productNameSelector = '//p[contains(@class, "sp__name")]';
    this.productPriceSelector = '//span[contains(@class, "TextWeb__Text-sc-1cyx778-0 gimCrs")]';
    this.productLinkSelector = '//div[contains(@class, "sp grid")]/a[@target="_blank"]';
    this.searchbar='#suggestionBoxEle';
    this.searchbutton='#RIL_HomeSearchButton';
    this.addtocat='#add_to_cart_main_btn';
    this.link='href';
    this.pincode='#RIL_PDPInputPincode';
    this.checkoutbutton='(//button[@id="btn-goto-checkout"])[1]';
    
    }
}

export{reliancedigital}