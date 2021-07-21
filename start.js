const concurrently = require('concurrently');

// concurrently([{command: 'npm run start:*', env: process.env}])
concurrently([{command: 'npm run start:*'}])
