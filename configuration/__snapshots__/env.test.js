require('dotenv').config();


describe('environmental variables', () => {
  const ENV = process.env;

  test('process.env exists', () => {

    expect(ENV).toBeTruthy();//
  });

  test('will receive process.env variables', () => {
    expect(ENV.PLAID_CLIENT_ID);
    expect(ENV.PLAID_SECRET);
    expect(ENV.PLAID_PUBLIC_KEY);
    expect(ENV.REACT_APP_PLAID_PUBLIC_KEY);
    expect(ENV.PLAID_ENV);
  });
});