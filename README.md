"# Lemonade" 

How to run
run 'npm install' for the frontend and backend packages
Open terminals in each of the folders
Backend: node server.js
Frontend: npm start


Assumptions:
Minimal validations on both front end and backend
Assumes the frontend will send json in the proper format to the backend, there is no format or type checks
Both apps are running on localhost:3000 and localhost:3001
Beverages was pre-populated in the backend. New beverages can be added using the /beverages POST endpoint
No Authentication /Authorization
In memory storage instead of connecting to a DB i.e no persistence
Frontend and backend both calculate their total prices. The backend will only recieve the name of the beverage, then check the db itself to get prices.


Backend Technologies:
To preface, I tried to keep the use of AI to a minimum here as I was interested in how backend Node APIs work and wanted to learn more about it. AI was use to help create a simple structure and auto-completions. 
In the backend I used Node and Express. As this is my first node app, i was unsure the best practices for these kinds of APIs. I took a design approach that I would normally take in Java/ Springboot apps. I followed a 3 layered architecture with a Controller layer(server.js), Service layer, and Repository layer. Controller handles the incoming HTTP requests. Any logic is handled by the Service layer and any interaces with the Database is done by the Repository layer. 
To keep it simple, I went with an in memory database using arrays, but this logic could be replaced to make use of MongoDB or another NoSQL DB. 
The app has 4 endpoints to both GET and POST beverages and orders. When an order comes in, the backend relies on its own logic for calculating the price. This decision was made to prevent a consumer from manipulating prices from the frontend. 


Frontend Technologies:
For the frontend, i relied on AI more heavily as I am primarily a backend dev. However, I made sure to keep it simple so i could still understand the code and what it was doing. It is a simple React application with a single page. When it loads up, it calls the /GET /api/v1/beverages endpoint to list the beverages. When the user submits, it sends a request to /POST /api/v1/orders endpoint to store the order. It also dynamically calculates the total price. 
Since I used ai more here, there are a few more features such as validations for the customer name and that they have made a selection before submitting.


