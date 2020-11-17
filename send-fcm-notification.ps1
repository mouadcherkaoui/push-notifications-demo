
$headers=New-Object "System.Collections.Generic.Dictionary[[String],[String]]"

$headers.Add('Content-Type', 'application/json')
$headers.Add('Authorization', 'key=AAAAWeQ09i0:APA91bGFCjMvlMlIXRGkqFyKb_of6jQDMQjyo9GbfwtrhG3vtZyYBZLZSG5TYZddTIuqLX_ziCT-_vMsWnGCfQhNYWPcawsziPN0ozZsWLujb9j4caV8nLDUHcf_IjnY2ml61qkH2H09')

$data= @"
 { 
    "data": {
        "title": "from powershell test data", 
        "body":"body"
    }, 
    "to":"cZ8LHMW2DTZY09k5XTg9mm:APA91bFIMkd96AfxyDJ5MQrgnfxIiD4Cb9kFFFA8J3eFISCiz1G9B2J1OJB2NIGXoPnC4xdHh8GuxxoYoYgTfYjlpWoc0RrHcyc7IPeA9rwjTuzgcAFd0nMg90Y_bEzebpJV9nd30qET"
}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data -SkipHeaderValidation
