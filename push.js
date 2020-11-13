var push = require('web-push');

let vapIdKeys = {
    publicKey: 'BHL36786lRWEUvxLV0HrT5oqp7-nuSfPMGUTJBZNlUIWkOQfZo7pItZ05USM0uIDgif_LZGHFbG-7eyKl_SKIkI',
    privateKey: 'D9naHAtzZ_3TWdI0NocpB_eWieSB8RFgRKttEfC4wPI'
  };
  //push.generateVAPIDKeys();

//console.log(vapKeys);

push.setVapidDetails('mailto: cherkaoui.mouad@live.fr', vapIdKeys.publicKey, vapIdKeys.privateKey);

let sub = {
    endpoint:"https://db5p.notify.windows.com/w/?token=BQYAAADFvV8wGwbJdHLygeAaElYnuwHgeQSWvL3WXA6FZcJPFedQ77ohXemzgfftt84H7DvxjfOkmmLvk9lCXKTbkJXglPk4yEfoxKPSpDDD3AoiwppgJJQwAx3Q9BydfL4UpOBRuCRBq3YOG1GYeBx8KyCxjw3%2fHqyNCKwbKExsXXIWWrsi6wum5AYypd3kHAw%2bohsXOLzk8hNx%2bI4kzH3BNWzbC52cfUibfp3HblU%2bd%2br6mktzOyP7N67HsA%2bpSi3Kp3Ntn3SnNzt2Zrd%2f9R6%2bA8k40qx2KCywOTMpeSWG%2bMr0tFQEw8Z69r%2bfg8V%2fQq3DkVx8zwyXIuI5H4fFIpOpDTW9",
    expirationTime:null,
    keys:{
        p256dh:"BBm9_TAKVxN4SZgr2tNInjIJWcEfFN8ILjp2GKTH8opxEc5BMsv39HgXvbBS4lGVhwrO7GjOeuME86vB0tVx5w0",
        auth:"RfQ76RImslL7NlyjxwC5rQ"
    }
};

push.sendNotification(sub, "message");