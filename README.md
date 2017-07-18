# EthExplorer (In Progress)

![EthExplorer Screenshot](http://i.imgur.com/NHFYq0x.png)

## Deploying to Azure
1. Deploy the arm template in arm/template.json to azure
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fdenniszielke%2Fexplorer%2Fmaster%2Farm%2Ftemplate.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>  

It will deploy the following resources
- Azure Web App with the code for the Ethereum explorer

Make sure to give it a proper deployment name to avoid naming collisions and set the remote RPC adress of of your azure ethereum consortium rpc endpoint from the output of the arm deployment.