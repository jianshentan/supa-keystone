# Supa website

This file shows how to update and modify www.supa.ai.

[The website currently runs on aws (credentials to be gotten from the SUPA team)]

## To update letsencrypt cert:

The website uses letsencrypt for ssl. The cert can use a cron job to autorenew, however, the cron job is not active, so we just manually update.

1. ssh into machine using key (aws-ec2-supa-webapp.pem)

    ```sh
    ssh -i "aws-ec2-supa-webapp.pem" ubuntu@ec2-52-7-14-23.compute-1.amazonaws.com
    ```

1. check for expiration

    ```sh
    sudo openssl x509 -dates -noout -in /etc/letsencrypt/live/www.supa.ai/cert.pem
    ```

1. go into supa website directory

    ```sh
    cd www.supa.ai
    ```

1. renew cert for letsencrypt

    ```sh
    sudo service nginx stop (stops nginx server - website will be down for a moment)
    /opt/letsencrypt/certbot-auto renew 
    sudo service nginx start (starts nginx server)
    ```

## Update Website code:

Since there was only 1 developer on this repo, there is not build pipeline. Instead we simply ssh into the prod machine and clone down the latest changes.

1. make sure you have node and mongodb installed

1. git clone repo "https://github.com/jianshentan/supa-keystone"

1. install packages from package.json

1. start mongodb with: `mongod`

1. listen for changes to scss 

    ```sh
    *scss --watch public/styles/site.scss:public/styles/site.css public/styles/msite.scss:public/styles/msite.css
    ```

1. Run keystone app: 

    ```sh
    node keystone
    ```

1. ssh into machine using key (aws-ec2-supa-webapp.pem)

    ```sh
    ssh -i "aws-ec2-supa-webapp.pem" ubuntu@ec2-52-7-14-23.compute-1.amazonaws.com
    ```

1. go into supa website directory

    ```sh
    cd www.supa.ai
    ```

1. clone down latest code:

    ```sh
    git clone <url>
    ```

1. stop all processes in __forever__

    ```sh
    sudo forever stopall
    ```

1. run keystone app with __forever__

    ```sh
    sudo forever start keystone.js
    ```


---
# Consise:

## Setup for development:
1. Run your mongodb database (run **mongod**)
2. Listen for changes to SCSS (run **scss --watch public/styles/site.scss:public/styles/site.css public/styles/msite.scss:public/styles/msite.css*)
3. Run the keystone app (run **node keystone**)

## Deploy on Ec2 (make sure port 80 is open/ allow inbound traffic from http):
1. install packages (npm install)
2. install forever (sudo npm install -g forever)
3. run keystone webapp with forever: (sudo forever start keystone.js)

## Force renew letsencrypt cert
1. sudo service nginx stop (stop nginx server)
2. /opt/letsencrypt/certbot-auto renew
3. sudo service nginx start (start nginx server)

## Update code (do not make changes on the ec2 instance):
1. clone from github (git clone ...)
2. stop all processes in forever (sudo forever stopall)
3. run keystone webapp with forever: (sudo forever start keystone.js)
