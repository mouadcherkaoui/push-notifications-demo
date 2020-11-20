
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
    "to":"fbEjV-ZpgeaRAiaihjooRj:APA91bGUMS-eJ28AzQpK36jWuVGituZOZYj0TLFkErWhTqo1uvFvTpaC0Y48aojXNgTpqZdJbfy6-grOK5XNoUwOa74XFjgafdTcL9YKbRWoeZEZZlX_3MPOt1cwI9T5s34ZmVuN7xlS"
}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data -SkipHeaderValidation
