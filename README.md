# push-notifications-demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/d5e047df-0b7b-4180-b454-0b74337b663b/deploy-status)](https://app.netlify.com/sites/frosty-feynman-166a70/deploys)

## Introduction

the purpose of this project is to demonstrate how to use push notifications using firebase and how to launch a notification using Powershell.

recently I got a question on Microsoft's Answers forum about how to start a notification based on from a scheduled task, the idea was great since as an IT you cant all the time monitors the health and state of a system, and here is where a notifications system should fill the gap, especially when you are able to broadcast notifications to any subscriber in different platforms mobiles and desktops, also I'm aware that there is ready to use solutions, anyway it is a great use case to demonstrate messaging integration and implementation.

## initial configuration to go Up and Runing

you can use the project as is, all you need is to use your own firebase configuration, lets go step by step:

### clone the project

first clone the project to make the required updates locally.

```bash
git clone https://github.com/mouadcherkaoui/push-notifications-demo
#if you have vscode
code ./push-notifications-demo
```

### update configurations variables

next go to the file firebase-config.js where you can substitute the value of the firebaseConfig varible with your own configuration.

### publish to netlify (optional)
