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


## React Prototype

- [x] `npm` for dependency management
- [x] ES6 (with webpack module system)
- [ ] Actions, creators and tests
- [ ] Reducer and tests
- [ ] Store
- [ ] React view elements, tests if necessary
- [ ] Code coverage tools
- [ ] Enhancements
- [ ] Readme / docs
- [ ] Integrate with maven build
