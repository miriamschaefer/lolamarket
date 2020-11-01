const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })

const request = new Request('https://api.comprea.com/v7/user/session', {
    method: 'GET',
    headers,
});

const postalCode = 28010;
const store_id = 1;
// const category_id = 93;

const postalRequest = 'https://api.comprea.com/v7/user/postalcode';

const shopRequest = 'https://api.comprea.com/v7/company/categories';

// const productRequest = 'https://api.comprea.com/v7/company/items';


const getData = async () => {

  const getToken = await fetch(request);
  const token = await getToken.json();
  console.log(token);

  const getShops = await fetch(`${postalRequest}?token=${token.token}&postalcode=${postalCode}`);
  const shops = await getShops.json();
  console.log(shops);

  const getCategories = await fetch(`${shopRequest}?token=${token.token}&postalcode=${postalCode}&company_id=${store_id}`);
  const categories = await getCategories.json();
  console.log(categories);

  // const getSubcategories = await fetch(`https://api.comprea.com/v7/company/items?token=${token.token}&postalcode=${postalCode}&company_id=${store_id}&category_id=${category_id}`);
  // const subcategories = await getSubcategories.json();
  // console.log(subcategories);

  }


// const getToken = async () => {
//       const response = await fetch(request);
//       const token = await response.json();
//       return token.token;

//     };



export default getData;