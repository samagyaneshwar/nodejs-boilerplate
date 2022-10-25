# Node JS boilerplate 

This repository has boilerplate code, it will help us to quicky setup a Node JS project with **Express JS** - API server and server side rendering with nunjucks.

This does not have any DB configured. If required, please configure it by installing necessary packages manually.

## Prerequisites

Create a `.env` file in the project root and add the following variables

* NODE_ENV - `local`, `development`, `production`
* PORT - Port number

We can setup more environments with new NODE_ENV values such as `staging`, `qa` etc., and add configuration in `env/index.js` with new environment value as key name.

## Install

```
npm i
```


## Run

`package.json` has `dev` script to run the server with nodemon.

To run the server 

```
npm start
```

To run the server with nodemon:

```
npm run dev
```

## Test API

### Request

`GET /`

```
curl --location --request GET 'http://localhost:3000'
```

### Response:

```
{
    "status": 200,
    "success": true,
    "message": "ok",
    "data": {}
}
```

## Others

We have ```response``` middleware at `middlewares/response.js`, that attaches the following methods to the express `response` object.

```
ok()

created()

noContent()

badRequest()

unauthorized()

forbidden()

notFound()

methodNotAllowed()

serverError()

tooManyRequests()
````

We can pass an argument as object to these methods.

Default argument object structure:

```
{
    status: number,
    success: boolean,
    message: string,
    data: object
}
```
When we pass an argument, it will merge with default object. Check middleware at given path to understand how it works.
