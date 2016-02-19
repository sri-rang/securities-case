# Securities-Casus

This is the securities-casus project. This project is used as a casus when selecting new hires for the company I work for.

Build this project by;
    
    $ mvn clean install

## Main subprojects

### securities-casus-service

securities-casus-services implements the services for this application and contains its domain model.
The domain model is simple. There are is an Instrument class and a Price class. An instrument has a code and price. 
A price has a timestamp and an amount. The services module contains the InstrumentService (spring component) which can be used to retrieve all instruments with their latest prices. It is also possible to register a InstrumentListener which will callback in case a price of an instrument is updated.
To simulate real instrument price updates a spring scheduler is used which randomly updates prices every second and triggers the callback.


### securities-casus-web

securities-casus-web implements a REST API and contains the web front-end implemented with AngularJS.

## The Assignment

Please implement the securities-casus-web module using AngularJS. The module should show a page with all the instruments on them.
Instrument price updates should be shown in this page as well.
