# Sample Firstline Angular

This is a sample Angular app with fully fledged authentication using Firstline.

## Helpful resources

- [Quick setup](https://docs.firstline.sh/quicksetup/angular) - our guide for quickly adding login, logout and user information to a Angular app using Firstline.
- [NodeJS sample backend](https://github.com/firstline-idp/firstline-express-posts-api) - the backend counterpart to this sample app.
- [Firstline docs](https://docs.firstline.sh) - explore our docs site and learn more about Firstline.

## Getting started

### Setup Firstline Application & API
1. Follow the [Quick setup](https://docs.firstline.sh/quicksetup/angular) to configure a Firstline Application.
2. Add a Firstline API as shown in [Secure API](https://docs.firstline.sh/secureapi).

**Important:** Don't forget to configure the Application URIs.

### Installation

1. Clone this repository
2. Install the required dependencies via the appropriate command below.

Using npm:

```sh
npm install
```

Using yarn:

```sh
yarn install
```

### Configuration

1. Rename the `sample.config.json` file to `config.json`.
2. Replace **API_URL** with the URL where your backend runs.
3. Replace **DOMAIN**, **API_IDENTIFIER** and **CLIENT_ID** with the settings you configured in the setup step. You can also find them in the Application's and API's "Configure" tab in your dashboard.

Example:
```json
{
  "API_URL": "http://localhost:8080",
  "API_INTERCEPTOR_ALLOWED_LIST": ["http://localhost:8080/*"],
  "FIRSTLINE_AUDIENCE": "http://localhost:8080",
  "FIRSTLINE_DOMAIN": "a2hccrzmw8qw9zxpyptp.dev.firstline.sh",
  "FIRSTLINE_CLIENT_ID": "L.Bd3miyssPHeXDoOQ3Kjj62qDXnNjfC",
  "PRODUCTION": false
}
```

### Setup the backend sample

To make full use of the sample app, you can now set up the appropriate backend. For this you can simply use our [NodeJS sample](https://github.com/firstline-idp/firstline-express-posts-api).

### Try it out

Run the following command and open http://localhost:4200 in your browser.

```sh
npm start
```