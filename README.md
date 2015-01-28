# React Mini Router Test

Test case for: https://github.com/larrymyers/react-mini-router/issues/18

Steps to reproduce:

* `npm install`
* `bower install`
* `node server`
* Fire up `localhost:3000` in your browser
* Bring up the Network tab in the debugging tools so you can see when a full page request is made
* Click `Page one` - this will load without a full page request
* Click `Page two` - this now causes a full page request

