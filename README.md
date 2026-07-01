# Yeetcode-Extension
This repository is a redevelopment of our original Google Chrome extension called Yeetcode. It allows two Leetcode users to battle each other.

# Development

### How to run it
The following steps are meant for development. The real chrome extension **will** be available on the chrome marketplace.

1. Download and navigate to this repository code: `git clone https://github.com/Tofudog/Yeetcode-Extension.git`
2. Install [Node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. Run `npm install` to get all the necessary dependencies
4. Run `npm run build`. You should see a `build/` directory
5. Open up a Google Chrome browser and search up chrome://extensions/
6. Enable developer mode in the top-right
7. Press **Load unpacked** and select `build/`
8. Enjoy the extension!

### Testing
Since syntax and formatting errors are only modestly important, we opted for speed over accuracy. Hence, we are using [Oxlint](https://betterstack.com/community/guides/scaling-nodejs/oxlint-vs-eslint/)

Run `npm run lint` to verify that all code is formatted properly and syntatically good.
