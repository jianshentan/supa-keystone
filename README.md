## Setup for development:
1. Run your mongodb database (run **mongod**)
2. Listen for changes to SCSS (run **scss --watch public/styles/site.scss:public/styles/site.css public/styles/msite.scss:public/styles/msite.css*)
3. Run the keystone app (run **node keystone**)

## Deploy on Ec2 (make sure port 80 is open/ allow inbound traffic from http):
1. install packages (npm install)
2. install forever (sudo npm install -g forever)
3. run keystone webapp with forever: (sudo forever start keystone.js)

## Update code (do not make changes on the ec2 instance):
1. clone from github (git clone ...)
2. stop all processes in forever (forever stopall)
3. run keystone webapp with forever: (sudo forever start keystone.js)