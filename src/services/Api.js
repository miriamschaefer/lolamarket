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

const productRequest = 'https://api.comprea.com/v7/company/items';


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


// const getToken = () => {
//  fetch(request)
//       .then(async response => {
//         const token = await response.json();
//        return token;

    //     if (token) {
    //         fetch(`${postalRequest}?token=${token}&postalcode=${postalCode}`)
    //         .then(async responseShops => {
    //             const shops = await responseShops.json();
    //             return shops;
    //         })
    //     }
    //   })
     
    // };


// const getToken = async () => {
//       const response = await fetch(request);
//       const token = await response.json();
//       return token.token;

//     };


// const getShops = async (token) => {
//   const response = await fetch(`${postalRequest}?token=${token}&postalcode=${postalCode}`);

//   const shops = await response.json();

//   return shops;
// }
// const getShops = async () => {
//     const response = getToken().then((response) => {
        // fetch(`${postalRequest}?token=${token}&postalcode=${postalCode}`)
//     })
// }


export  default getData;

// `${postalRequest}?token=${token}&postalcode=${postalCode}`