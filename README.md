#### Notice 15/5/2016: This project has been 'PAUSED' in favor of a Elm rewrite. ####

For the last year, I have developed a Javascript version of Castle of the Winds. Over the year, I have made several large changes to the framework used and lately, added a framework for doing automated unit testing to deal with the large amount of time spent debugging.

However, and being fully aware that this is potentially a very risky diversion which could jeopardise the successful completion of the project, I have decided to put this version of Cotw on hold for a more promising language, Elm. If that does not work out, then I shall continue with this React/Redux path but for the moment, this repo is not being actively worked on. Please have a look at [Cotwelm](https://github.com/mordrax/cotwelm).

I will still be updating my devlog at [https://mordrax.github.io/cotwmtor/](https://mordrax.github.io/cotwmtor/).

# Castle of the Winds Remake #
Castle of the Winds is a tile-based RPG made by Rick Saada in the late 80s. Many old school RPGers remember the game with fond memories and as such, this is my second attempt to port the game into the modern era to be playable on mobile and web browsers.

Check out the current work in progress here: http://cotwmtor.meteorapp.com

**Note:** Meteor takes a minute to fire up so if you hit the loading screen, it isn't broken.

There is a devlog detailing the making (aka my rants) of this remake here: https://mordrax.github.io/cotwmtor/

Current status of project tracked on trello here: https://trello.com/b/EByoUHwY/cotwmtor

# Build from source #

#### Prerequisites ####
Please install these following packages for your OS:
- [NodeJS](https://nodejs.org/en/)
- [MeteorJS](https://www.meteor.com/install)

#### Build ####
1. `git clone http://github.com/mordrax/cotwmtor` in a new directory
2. `npm i && meteor`, grab a coffee as npm and meteor pulls all the required packages
3. Goto `http://localhost:3000`

#### Tests ####
I use Karma as my test runner. It powers Jasmine, Enzyme and jsdom for a mix of unit / integration testing.
Simply run `npm run tests` from the root directory to start the karma watcher.
