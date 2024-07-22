import {anyService} from '../../Common/apibase/apibase'

const testapi =anyService
const apiapplicationHome = {

async testRelianceDigitalSearchAPI() {
    const baseUrl = 'https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata';
    const params = {
        pageType: 'productSearchPage',
        q: 'Titan watch'
    };
    const expectedProperties = ['data', 'data.BannerSection', 'data.MessageSection', 'data.productListData',
        'data.productListData.results[0].price'];
    await testapi.testApiEndpoint(baseUrl, params, expectedProperties);
    console.log("Validate response message and data")
},
   async testtatacliqSearchAPI() {
  const baseUrl = 'https://searchbff.tatacliq.com/products/mpl/search';
  const params = {
    searchText: 'Titan watch:relevance:inStockFlag:true',
    channel: "WEB"
  };
  const expectedProperties = ['searchresult', 'searchresult[0].ussid','searchresult[0].price'];
  await testapi.testApiEndpoint(baseUrl, params, expectedProperties);
  console.log("Validate response message and data")
}
}

export {apiapplicationHome}