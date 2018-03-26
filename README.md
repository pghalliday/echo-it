# echo-it

[![Build Status](https://travis-ci.org/pghalliday/echo-it.svg?branch=master)](https://travis-ci.org/pghalliday/echo-it)
[![Build status](https://ci.appveyor.com/api/projects/status/u43yda75054tdv5l/branch/master?svg=true)](https://ci.appveyor.com/project/pghalliday/echo-it/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/pghalliday/echo-it/badge.svg?branch=master)](https://coveralls.io/github/pghalliday/echo-it?branch=master)

Named echo servers for targeting messages.

## Install

```
npm install --save-dev echo-it
```

## Usage

Start a named echo-it server from the command line

```
echo-it myChannel
```

Or in javascript

```
const echoIt = require('echo-it');
await echoIt.listen({
  name: 'myChannel',
});
```

Create an echo function to connect to that named server

```javascript
const echoIt = require('echo-it');
const echo = await echoIt.connect({
  name: 'myChannel',
});
```

Echo messages to have the server output them to the console

```javascript
echo('message 1\n');
echo('message 2\n');
```
