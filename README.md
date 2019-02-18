# Autentico

Set of software products for smart clothing

## What is Autentico ?

Autentico is a series of software products used for smart clothing. There are three main components:

1. A RESTful API Service used for the business logic.
2. A Dashboard WebApp used for handle datas.
3. A **Cross-Platform** Mobile application.

## Tecnologies used

1. BanckEnd: NodeJS, ExpressJS, SequelizeJS, MySQL, SQLite, MochaJS, ChaiJS.
2. Dashboard: Angular v6;
3. Ionic Framework v3/4 compatible;

## How to install
Prerequisites:
1. install sqlite3 and sqlite3_analyzer and add to your PATH
2. install nodejs and npm
3. if you want build the app you have to install Android SDK and ionic

Step to install
1. `git clone https://github.com/didacusabella/Autentico`
2. if you want to start the server: ` cd server && npm install && npm start`
3. if you want to start the dashboard: ` cd dashboard && npm install && npm start`
4. if yout want to start the mobile  `cd client && ionic cordova run <android|ios>`
