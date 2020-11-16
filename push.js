var push = require('web-push');

//comment this section after generatin the keys 
// keys = push.generateVAPIDKeys();

// let vapIdKeys = {
//     publicKey: keys.publicKey,
//     privateKey: keys.privateKey
// };
let vapIdKeys = {
    publicKey: 'BNVZJPs4Nj82Ok5SX0rAunsda_mXMKGrwJY2f6tqFBCf96hi5jWt8ScjeRMH8ibILL_BxSs41eSpu8sf34JFPlk',
    privateKey: 'jtA_tlqOJWBMes7DCurcCAKJYLCJgPBk4dg11a_kRfs'
};

push.setVapidDetails('mailto: cherkaoui.mouad@live.fr', vapIdKeys.publicKey, vapIdKeys.privateKey);

// let sub = {
//     endpoint:"https://db5p.notify.windows.com/w/?token=BQYAAADFvV8wGwbJdHLygeAaElYnuwHgeQSWvL3WXA6FZcJPFedQ77ohXemzgfftt84H7DvxjfOkmmLvk9lCXKTbkJXglPk4yEfoxKPSpDDD3AoiwppgJJQwAx3Q9BydfL4UpOBRuCRBq3YOG1GYeBx8KyCxjw3%2fHqyNCKwbKExsXXIWWrsi6wum5AYypd3kHAw%2bohsXOLzk8hNx%2bI4kzH3BNWzbC52cfUibfp3HblU%2bd%2br6mktzOyP7N67HsA%2bpSi3Kp3Ntn3SnNzt2Zrd%2f9R6%2bA8k40qx2KCywOTMpeSWG%2bMr0tFQEw8Z69r%2bfg8V%2fQq3DkVx8zwyXIuI5H4fFIpOpDTW9",
//     expirationTime:null,
//     keys:{
//         p256dh:"BBm9_TAKVxN4SZgr2tNInjIJWcEfFN8ILjp2GKTH8opxEc5BMsv39HgXvbBS4lGVhwrO7GjOeuME86vB0tVx5w0",
//         auth:"RfQ76RImslL7NlyjxwC5rQ"
//     }
// };

//push.sendNotification(sub, "message");