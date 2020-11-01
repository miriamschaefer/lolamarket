const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })

const request = new Request('https://api.comprea.com/v7/user/session', {
    method: 'GET',
    headers,
});


const postalRequest = 'https://api.comprea.com/v7/user/postalcode';

const shopRequest = 'https://api.comprea.com/v7/company/categories';

// const productRequest = 'https://api.comprea.com/v7/company/items';


const getToken = async () => {

  const getToken = await fetch(request);
  const token = await getToken.json();

  return token;

}


const getShops = async (token, postalCode) => {

 const getShops = await fetch(`${postalRequest}?token=${token}&postalcode=${postalCode}`);
  const shops = await getShops.json();
  
    return shops.services[1].markets.map((market) => {
      return {
        id: market.id,
        name: market.name,
        shortcut: market.shortcut,
        icon: market.icon,
        color: market.color,
      }
    })

}


const getCategories = async (token, postalCode, store_id) => {

  const getCategories = await fetch(`${shopRequest}?token=${token}&postalcode=${postalCode}&company_id=${store_id}`);
  const categories = await getCategories.json();
  return categories;
 }


  // // const getSubcategories = await fetch(`https://api.comprea.com/v7/company/items?token=${token.token}&postalcode=${postalCode}&company_id=${store_id}&category_id=${category_id}`);
  // // const subcategories = await getSubcategories.json();
  // // console.log(subcategories);





export {  getToken, getShops, getCategories };