import { APIGatewayProxyHandler } from 'aws-lambda';
import axios from 'axios';
import 'source-map-support/register';

export const getPostalCode: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body)
  console.log('body ->', body)
  const postalCode = await axios.get(`http://api.postmon.com.br/v1/cep/${body.cep}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
    });
  return {
    statusCode: 200,
    body: JSON.stringify({
      postalCode,
    }),
  };
};
