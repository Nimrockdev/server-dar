# Server-dar

Use .env file in project root. Use the service password to unzip the file 

## Install project
   `npm install`

## esLint  
   `npx eslint file`

## Testing JEST  
   `npm run test`


## Run  
   `npm run start`


### Step 1
   `Make a post-login request, with user data and save token`

![https://github.com/Nimrockdev/server-dar](https://github.com/Nimrockdev/server-dar/blob/main/img/Login.png)

### Step 2
   `Make a post request to clients, indicating the token`

![https://github.com/Nimrockdev/server-dar](https://github.com/Nimrockdev/server-dar/blob/main/img/Clients.png)

### Step 3
   `Make a post request to policies, indicating the token`  
   
![https://github.com/Nimrockdev/server-dar](https://github.com/Nimrockdev/server-dar/blob/main/img/Policies.png)


#### If when accessing clients or policies, it returns expired token, request a new token from Login  

![https://github.com/Nimrockdev/server-dar](https://github.com/Nimrockdev/server-dar/blob/main/img/Token%20Expired.png )
 




Javier Sánchez Gómez
