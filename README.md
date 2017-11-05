```
sudo apt install npm

sudo npm install claudia -g

sudo apt-get install nodejs

sudo ln -s /usr/bin/nodejs /usr/bin/node

mkdir ~/.aws

vim ~/.aws/credentials

npm run create

sudo npm install claudia-api-builder --save

sudo npm install claudia-bot-builder --save

sudo apt install python-pip

pip install awscli

aws --version

cd pizzas/

claudia create --region eu-central-1 --api-module api

...

claudia update

...

aws dynamodb create-table --table-name pizza-orders --attribute-definitions AttributeName=orderId,AttributeType=S --key-schema AttributeName=orderId,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region eu-central-1 --query TableDescription.TableArn --output text

sudo npm install aws-sdk  --save

aws iam put-role-policy --role-name pizza-api-executor --policy-name PizzaApiDynamoDB --policy-document file://./roles/dynamodb.json

claudia update

curl -i -H "Content-Type:application/json" -X POST -d '{"pizza":1,"address":"ABC"}' https://3h96u9whi3.execute-api.eu-central-1.amazonaws.com/latest/orders

aws dynamodb scan --table-name pizza-orders --region eu-central-1 --output json


```
