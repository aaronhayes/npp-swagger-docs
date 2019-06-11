const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const options = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: '../npp-docs/NPP-API-iso-20022_npp_api_notification-1.0.1-oas3-swagger.json',
        name: 'NPP API Notifications'
      },
      {
        url: '../npp-docs/NPP-API-iso-20022_npp_api-1.0.2-swagger.json',
        name: 'NPP API'
      }
    ]
  }
};


app.use('/docs', swaggerUi.serve, swaggerUi.setup(null, options));
app.use('/npp-docs', express.static('npp-docs'))

app.listen(7777, () => {
  console.log(`NPP docs ready at http://localhost:7777/docs`);
});