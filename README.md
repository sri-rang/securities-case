# Securities-Case

Build this project by;
    
    $ mvn clean install

## Main subprojects

### securities-case-service

securities-case-services implements the services for this application and contains its domain model.
The domain model is simple. There are is an Instrument class and a Price class. An instrument has a code and price. 
A price has a timestamp and an amount. The services module contains the InstrumentService (spring component) which can be used to retrieve all instruments with their latest prices. It is also possible to register a InstrumentListener which will callback in case a price of an instrument is updated.
To simulate real instrument price updates a spring scheduler is used which randomly updates prices every second and triggers the callback.


### securities-case-web

securities-case-web implements a REST API to retrieve the instrument list '/instruments' and contains a websocket to retrieve updates of instrument prices.

---

*and now for the actual implementation..*

### securities-case-web-client-prototype

#### getting started

```
# first install node on your machine, then..

cd securities-case-web-client-prototype
npm install                             # install deps
npm run test                            # run tests
npm run build                           # build

cd ../securities-case-web
mvn spring-boot:run                     # start app server
google-chrome http://localhost:8080/    # view prototype in browser

# maven integration
# npm install, build and test are integrated
# with the maven build cycle

mvn clean install

# should get dependencies, build and test the prototype
# see securities-case-web-client-prototype/pom.xml for more

```

#### the implementation / cliff notes

- es6 / es2015 with babeljs
    - nothing fancy, just a nicer concise version of js
- manage dependencies with npm
- react
    - defines the UI as a function of state
        - `(state) => UI`
    - pure functions
    - compose-able components
- use redux
    - actions
        - all possible actions that may occur, including:
            - rest api response
            - websocket push message
            - user interaction with the UI
        - provide helpers to create actions
    - store
        - state tree
        - state is immutable
        - provides an event store for all actions
            - `dispatch()` for new actions
    - reducers
        - reduce an action into a new state
        - `(old_state, action) => new_state`
    - glued into react UI with `redux-react`
        - render when new state
- integrated with maven
- tested with `mocha`

#### test output

```
  Action
    for get instruments
      ✓ should exist
      ✓ should be of the correct type
      ✓ should have instruments
    for select instrument
      ✓ should exist
      ✓ should be of the correct type
      ✓ should have code
    for get message
      ✓ should exist
      ✓ should be of the correct type
      ✓ should have message

  Types
    ✓ get instrument
    ✓ select_instrument
    ✓ get_message

  Reducer
    of filter instruments
      for unknown action
        ✓ state should exist
        ✓ state should have 0 instruments
        ✓ state should have null selected
      for get instruments
        ✓ state should exist
        ✓ state should have 4 instruments
        ✓ states first instrument should have code null
      for select instrument
        ✓ state should exist
        ✓ state should have correct selected instrument
    of messages
      for unknown action
        ✓ state should exist
        ✓ state should have 0 messages
        ✓ state should have null selected
      for get messages
        ✓ state should exist
        ✓ state should have 1 messages
        ✓ state should prepend messages
      for select instrument
        ✓ state should exist
        ✓ state should have correct selected instrument

  Store
    ✓ exists
    default state
      ✓ exists
      for filter instruments
        ✓ exists
        ✓ contains 0 instruments
        ✓ has null selected
      for messages
        ✓ exists
        ✓ contains 0 messages
        ✓ has null selected
    state after get_instruments action
      for filter instruments
        ✓ contains 4 instruments
        ✓ first instrument is null
    state after get_message action
      for messages
        ✓ contains 1 messages
    state after another get_message action
      for messages
        ✓ contains 2 messages
        ✓ message should be prepended
    state after select_instrument action
      for filter instruments
        ✓ has 9 selected
      for messages
        ✓ has 9 selected


  43 passing (19ms)

``
