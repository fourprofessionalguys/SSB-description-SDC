# Front End Capstone


> This was made during my time at Hack Reactor. It is a UI clone of a REI product page.

## Related Projects

Services
  - https://github.com/montyjs/mg-product-wrapper
  - https://github.com/montyjs/reviews-tm-service

Proxy
  - https://github.com/montyjs/jb-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Run ```sh npm install ``` to install dependencies
2. Make an .env file with this information inside
- See below:
```
PORT=<Port number here>
DB_USER=<'User name here'>
DB_PASSWORD=<'Password here'>
```
3. Set '<USERNAME>' to your psql username in package.json script 'build-db'
4. Run ```sh npm run build-db ```
5. Run ```sh npm run seed-db ```
6. Run ```sh npm run build-dev ``` to compile
7. Run ```sh npm run start ```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

