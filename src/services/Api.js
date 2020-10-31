const request = new Request('https://api.comprea.com/v7/user/session', {
    method: 'GET',
});

const postalRequest = new Request('https://api.comprea.com/v7/user/postalcode');

  
  const getInfo = async () => {
      const response = await fetch(request);
      const token = await response.json();
      return token;
    };

  export default getInfo;