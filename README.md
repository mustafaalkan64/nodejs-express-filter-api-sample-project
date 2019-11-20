# Nodejs Filter Data Api Sample Project With Express.js

This project is a nodejs web application that ensures api endpoint to filter data from mongodb via express.js.

You will need to download and install npm package and node.js after you download repo with git clone command.

I recommend to use github desktop application to manage all your github repos and git operations, and lightweight Visual Studio Code for IDE

https://desktop.github.com/

https://code.visualstudio.com/

## User Guide

Before you build and run your node js project, you need to install dependencies with below command. 

```
npm install
```

Once you installed dependencies, then you can run your project with below command on terminal.

```
npm run start
```

Now you are ready to send the HTTP POST requests to 

```
localhost:8080
```

I used Postman tool to send Http requests.
Postman is so easily to view requests and responses on api endpoints.
You can download and use at :

https://www.getpostman.com/

You need to add 4 keys and values to x-www-form-encoded type under body 

```

  startDate: "2016-01-26",
  endDate: "2018-02-02",
  minCount: 2700,
  maxCount: 3000

```

After you posted Http request with above body parameters, you would get response that looks like below:

```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "xqT9N0XwJ4qwU0GQ",
            "createdAt": "2016-07-06T06:54:46.169Z",
            "totalCount": 2700
        },
        {
            "key": "p63EP2qyOKKFIxDp",
            "createdAt": "2016-07-06T11:24:22.262Z",
            "totalCount": 2400
        },
        {
            "key": "qOnhSCoGcguBCKEA",
            "createdAt": "2016-07-06T12:27:44.248Z",
            "totalCount": 2100
        },
        {
            "key": "NMBUu74JC1bEGECM",
            "createdAt": "2016-07-06T13:12:01.175Z",
            "totalCount": 2800
        },
        {
            "key": "cfPUCV7oucsHOMPN",
            "createdAt": "2016-07-06T15:10:02.821Z",
            "totalCount": 2300
        },
        {
            "key": "iL6mmHXYBtcOuBL3",
            "createdAt": "2016-07-06T17:21:55.885Z",
            "totalCount": 2700
        }
    ]
}
```

If any error occurs you will get below response:

```
{
  "code": -1,
  "msg": "An error message",
  "records": null
}
```

You can just type below command to terminal to run test.

```
npm run test
```


I deployed this application to Heroku. You can send http request from:

https://nodejs-express-filter-app.herokuapp.com/


