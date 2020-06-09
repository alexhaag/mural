import { Router } from 'express';
import braintree from 'braintree';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import payConfig from '@config/paypal';
const routes = Router();
const gateway = braintree.connect({
  accessToken: payConfig.braintree.accessToken,
});
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);

routes.get('/client_token', async (request, response) => {
  const token = await gateway.clientToken.generate({});
  response.json({ data: token });
});

routes.post('/checkout', function (req, res) {
  var nonce = req.body.paymentMethodNonce;
  console.log(nonce);
  res.json(nonce);
});

/*
routes.post('/confirmBraintree', async (request, response) => {
  const data = request.body;
  const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'gvkpz6ctyxrmn3mv',
    publicKey: '2r3wtzbx6t6p6cck',
    privateKey: '5095027f9e1c6319bb853ffaf8952265',
  });

  let transactionResponse = await gateway.transaction.sale({
    amount: data.amount,
    paymentMethodNonce: data.nonce,
    options: {
      submitForSettlement: true,
    },
  });
  response.json({ data: transactionResponse });
});
*/
export default routes;
