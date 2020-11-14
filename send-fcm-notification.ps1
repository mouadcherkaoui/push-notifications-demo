
$headers=New-Object "System.Collections.Generic.Dictionary[[String],[String]]"

$headers.Add('Content-Type', 'application/json')
$headers.Add('Authorization', '*****')

$data= @"
 { 
    "data": {
        "title": "from powershell", 
        "content":"test"
    }, 
    "body": {
        "title": "from powershell", 
        "content":"test"
    }, 
    "to":"djw-GhtDnk3BM2bwryUYAf:APA91bH6XschFFEHM0GBwbVMcHCWJ4vuurWCGAJEAJR9r9wTW_BeDoUUwCdKZFtNYVy75l5OoVpEkO-_VRrA3z18HALmTOjw2LqBQJjt7Pi2XzsfP02tGbwO8FqFayJwi1k-18w_F1r2"
}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data -SkipHeaderValidation
