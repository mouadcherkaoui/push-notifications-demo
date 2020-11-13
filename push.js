var push = require('web-push');

let vapIdKeys = {
    publicKey: 'BHL36786lRWEUvxLV0HrT5oqp7-nuSfPMGUTJBZNlUIWkOQfZo7pItZ05USM0uIDgif_LZGHFbG-7eyKl_SKIkI',
    privateKey: 'D9naHAtzZ_3TWdI0NocpB_eWieSB8RFgRKttEfC4wPI'
  };
  //push.generateVAPIDKeys();

//console.log(vapKeys);

push.setVapidDetails('mailto: cherkaoui.mouad@live.fr', vapIdKeys.publicKey, vapIdKeys.privateKey);

let sub = {};

push.sendNotification(sub, "message");