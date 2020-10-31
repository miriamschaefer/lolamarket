const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })

const request = new Request('https://api.comprea.com/v7/user/session', {
    method: 'GET',
    headers,
});

const postalCode = 28010;

const postalRequest = new Request('https://api.comprea.com/v7/user/postalcode');

const shopRequest = new Request('https://api.comprea.com/v7/company/categories');

const productRequest = new Request('https://api.comprea.com/v7/company/items')


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


const getToken = async () => {
      const response = await fetch(request);
      const token = await response.json();
      return token
    };

// const getShops = async () => {
//     const response = getToken().then((response) => {
//         fetch(`${postalRequest}?token=${token}&postalcode=${postalCode}`)
//     })
// }


export default getToken;

// `${postalRequest}?token=${token}&postalcode=${postalCode}`