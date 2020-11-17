
$headers=New-Object "System.Collections.Generic.Dictionary[[String],[String]]"

$headers.Add('Content-Type', 'application/json')
$headers.Add('Authorization', 'key=AAAAWeQ09i0:APA91bGFCjMvlMlIXRGkqFyKb_of6jQDMQjyo9GbfwtrhG3vtZyYBZLZSG5TYZddTIuqLX_ziCT-_vMsWnGCfQhNYWPcawsziPN0ozZsWLujb9j4caV8nLDUHcf_IjnY2ml61qkH2H09')

$data= @"
 { 
    "data": {
        "title": "from powershell test data", 
        "body":"body",
        "url": "https://github.com/mouadcherkaoui/push-notifications-demo"
        "onClick": "()=>{alert('test');}"
    }, 
    "to":"db4Tu81IIQDAoOSNAeLAur:APA91bEB0Ec-bS_Hx4RZVa1TKLKP6ljxv5Xnxoo-5hCrC-UeQcAUco57aZOyCToNoQ9tlS08WScu6-BKK0UpG2xrnBCIZ9Q3F5dBvMNyev1bcZY-aHAqHaBcZnmF-QoSMfOPSMtgndVd"
}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data -SkipHeaderValidation
