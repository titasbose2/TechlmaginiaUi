<p align="center">
   <a href="https://opentemplatehub.com">
    <img src="https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/server/analytics-server-logo.png" alt="Logo" width=200>
  </a>
</p>

<h1 align="center">
Techlmaginia Softwares - Analytics Server Template v3
</h1>

[![License](https://img.shields.io/github/license/open-template-hub/analytics-server-template?color=43b043&style=for-the-badge)](LICENSE)
[![Issues](https://img.shields.io/github/issues/open-template-hub/analytics-server-template?color=43b043&style=for-the-badge)](https://github.com/open-template-hub/analytics-server-template/issues)
[![PRCLosed](https://img.shields.io/github/issues-pr-closed-raw/open-template-hub/analytics-server-template?color=43b043&style=for-the-badge)](https://github.com/open-template-hub/analytics-server-template/pulls?q=is%3Apr+is%3Aclosed)
[![LastCommit](https://img.shields.io/github/last-commit/open-template-hub/analytics-server-template?color=43b043&style=for-the-badge)](https://github.com/open-template-hub/analytics-server-template/commits/master)
[![Release](https://img.shields.io/github/release/open-template-hub/analytics-server-template?include_prereleases&color=43b043&style=for-the-badge)](https://github.com/open-template-hub/analytics-server-template/releases)
[![SonarCloud](https://img.shields.io/sonar/quality_gate/open-template-hub_analytics-server-template?server=https%3A%2F%2Fsonarcloud.io&label=Sonar%20Cloud&style=for-the-badge&logo=sonarcloud)](https://sonarcloud.io/dashboard?id=open-template-hub_analytics-server-template)
[![BTC](https://img.shields.io/badge/Donate-BTC-ORANGE?color=F5922F&style=for-the-badge&logo=bitcoin)](https://commerce.coinbase.com/checkout/8313af5f-de48-498d-b2cb-d98819ca7d5e)

Analytics Server Template is a generic open source analytics server that has simple yet powerful design to connect your business with third party analytics service providers (like Google Analytics or Matomo).

## Ways to Begin

### 1. Express Deploy

Deploy this template to Heroku

[![Deploy](https://img.shields.io/badge/Deploy_to-Heroku-7056bf.svg?style=for-the-badge&logo=heroku)](https://heroku.com/deploy?template=https://github.com/open-template-hub/analytics-server-template)

### 2. Start with Server Generator

Create your server with Server Generator Package

[![NPM](https://img.shields.io/badge/NPM-server_generator-cb3837.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@open-template-hub/server-generator)

### 3. GitHub Template

Use this repository as a Template

[![GitHubTemplate](https://img.shields.io/badge/GitHub-Template-24292e.svg?style=for-the-badge&logo=github)](https://github.com/open-template-hub/analytics-server-template/generate)

## Installations

Install **nodejs** and **npm** via **[nodejs.org](https://nodejs.org)**.

Check installed versions of **nodejs** and **npm** via running following commands:

```
node -v
npm -v
```

Check project's current **nodejs** and **npm** version from **[package.json](package.json)**.

## Environment Variables

If you don't give **RESPONSE_ENCRYPTION_SECRET**, response encryption mechanism will be disabled automatically.

``` applescript
PORT=4005

PROJECT={Project Name}
MODULE={Module Name}
ENVIRONMENT={Environment Name}

MONGODB_URI={Database Connection Url}
MONGODB_CONNECTION_LIMIT={MongoDB Connection Limit}

CLOUDAMQP_APIKEY={MQ Api Key}
CLOUDAMQP_URL={MQ Connection Url}

ANALYTICS_SERVER_QUEUE_CHANNEL={Analytics MQ Channel}
ORCHESTRATION_SERVER_QUEUE_CHANNEL={Orchestration MQ Channel}

ACCESS_TOKEN_SECRET={Access Token Secret}
RESPONSE_ENCRYPTION_SECRET={Response Encryption Secret}
```

## Http Requests

You can find list of available http request in the [requests](assets/requests) directory. You can run http requests directly via **WebStorm**, for more information check out: [jetbrains.com/help/idea/http-client-in-product-code-editor.html](https://jetbrains.com/help/idea/http-client-in-product-code-editor.html)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/furknyavuz"><img src="https://avatars0.githubusercontent.com/u/2248168?s=460&u=435ef6ade0785a7a135ce56cae751fb3ade1d126&v=4" width="100px;" alt=""/><br /><sub><b>Furkan Yavuz</b></sub></a><br /><a href="https://github.com/open-template-hub/analytics-server-template/issues/created_by/furknyavuz" title="Answering Questions">💬</a> <a href="https://github.com/open-template-hub/analytics-server-template/commits?author=furknyavuz" title="Documentation">📖</a> <a href="https://github.com/open-template-hub/analytics-server-template/pulls?q=is%3Apr+reviewed-by%3Afurknyavuz" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/fatihturker"><img src="https://avatars1.githubusercontent.com/u/2202179?s=460&u=261b1129e7106c067783cb022ab9999aad833bdc&v=4" width="100px;" alt=""/><br /><sub><b>Fatih Turker</b></sub></a><br /><a href="https://github.com/open-template-hub/analytics-server-template/issues/created_by/fatihturker" title="Answering Questions">💬</a> <a href="https://github.com/open-template-hub/analytics-server-template/commits?author=fatihturker" title="Documentation">📖</a> <a href="https://github.com/open-template-hub/analytics-server-template/pulls?q=is%3Apr+reviewed-by%3Afatihturker" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contributing

Refer to **[CONTRIBUTING.md](https://github.com/open-template-hub/.github/blob/master/docs/CONTRIBUTING.md)** to see how to contribute to Techlmaginia Softwares.

<br/>

## Code of Conduct

Refer to **[CODE_OF_CONDUCT.md](https://github.com/open-template-hub/.github/blob/master/docs/CODE_OF_CONDUCT.md)** to see contributor covenant code of conduct.

<br/>

## LICENSE

The source code for this project is released under the [MIT License](LICENSE).
