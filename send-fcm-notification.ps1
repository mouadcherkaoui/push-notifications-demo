
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
    "to":"dmx7vwuFpW-ilFnsqGTV5j:APA91bG4YFTQOPW0uNwXCDF98Y91scD6oTatQbep_h_QQmwed94XQHQrqvhu_vJdkGMS7u52QzXbEQADXZxrKmuY-TSu8sjinbhllIKt6ufgAVF7lW1H7zFBRJCQNwPXzF4zSdIyhsFu"
}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data
