
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
    "to":"eALLXg7Fqy3FyRXkL-ksct:APA91bESPzSsp9kCpgcoUG610JtlzQWcmnECbrA7JBQ_QSV4Fa-a78hRpPZ9yHrp4hZlKfEbzvssddmv76H9So6na0ozPPi2-ZOMCPeoSPQNrCgD9yR31f83U-EFMgei50wn7cfL3ciu"
}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data -SkipHeaderValidation
