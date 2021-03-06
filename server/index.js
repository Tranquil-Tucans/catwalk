/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const config = require('../config');
const outfit = require('./outfit');
const getRelatedProductData = require('./getRelatedProduct');
const getReviews = require('./getReviews');
const getReviewsMeta = require('./getReviewsMeta');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use('/product/*', express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products/:product_id', (req, res) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.product_id}`,
    headers: { Authorization: config.TOKEN },
  })
    .then((product) => {
      getReviews(req.params.product_id)
        .then((review) => {
          const productInfo = product.data;
          productInfo.reviews = review.data.results;
          res.status(200).send(productInfo);
        });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/products/:product_id/related', (req, res) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.product_id}/related`,
    headers: { Authorization: config.TOKEN },
  })
    .then((relatedProducts) => {
      const result = [];
      for (let i = 0; i < relatedProducts.data.length; i += 1) {
        result.push(
          Promise.all([
            getRelatedProductData(relatedProducts.data[i]), getReviews(relatedProducts.data[i])])
            .then((values) => {
              const data = values;
              data[0][0].reviews = data[1].data.results;
              return values[0];
            }),
        );
      }
      Promise.all(result)
        .then((values) => {
          let final = [];
          for (let k = 0; k < values.length; k += 1) {
            final = final.concat(values[k]);
          }
          res.status(200).send(final);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/getOutfits', (req, res) => {
  res.status(200).send(outfit.getOutfits());
});

app.post('/addOutfit', (req, res) => {
  res.status(201).send(outfit.addOutfit(req.body));
});

app.put('/updateOutfits', (req, res) => {
  res.status(201).send(outfit.updateOutfits(req.body));
});

app.delete('/deleteOutfit', (req, res) => {
  res.status(200).send(outfit.deleteOutfit(req.body.styleId));
});

app.get('/products/:product_id/styles', (req, res) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.product_id}/styles`,
    headers: { Authorization: config.TOKEN },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

app.post('/cart', (req, res) => {
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    data: { sku_id: req.body.styleNumber },
    headers: { Authorization: config.TOKEN },
  })
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/metaData/:id', (req, res) => {
  const results = [];
  getReviewsMeta(req.params.id).then(({ data }) => {
    const { characteristics } = data;

    const featureNames = Object.keys(characteristics);
    const values = Object.values(characteristics);

    for (let i = 0; i < featureNames.length; i += 1) {
      const currentFeatureName = featureNames[i];
      const currentValue = values[i].value;
      const currentId = values[i].id;
      results.push(
        {
          name: currentFeatureName,
          id: currentId,
          value: currentValue,
        },
      );
    }
    res.status(200).send(results);
  })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.post('/interactions', (req, res) => {
  axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/interactions',
    headers: { Authorization: config.TOKEN },
    data: {
      element: req.body.element,
      widget: req.body.widget,
      time: req.body.time,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
