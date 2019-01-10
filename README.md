# Birdi Code Challenge

### Built With
- Node
- Express
- PostgresSQL
- React

### Packages & APIs
- axios
- cors
- dotenv
- express
- nodemon
- pg
- Open Weather API

### Pain Points
- Connecting Node server with PostgreSQL database: I thought this step would be pretty straightforward... oh how I was mistaken! Followed a few tutorials, as it was my first time linking the two up, and just could not get it to work. Went back to the pg package docs and finally got it all up running (which was an awesome feeling)!
- SQL statements: it seems I got a little too comfortable with the magic that Rails' ORM ActiveRecord provides.

### To Do (If I Had More Time)
- Get all aircraft within a 100km range of a given location (rather than just aircraft at a specific location)
- Use PostGIS for handling latitude and longitude more accurately
- Normalise data further (e.g. a table for pilots with a FK pilot_id in the aircraft table)
- More seed data for the database (possibly scraping it in from an API)
- Better error handling
- Testing
- CSS

### Bugs
- Data returned from the Open Weather API is being stored as strings in the database, rather than their specified data types
- The GET request to /weather/:lat/:lng needs to handle locations that don't already exist in the location table

### Areas of Uncertainty
- What data should be stored in the aircraft table
