
$headers=New-Object "System.Collections.Generic.Dictionary[[String],[String]]"

$headers.Add('Content-Type', 'application/json')
$headers.Add('Authorization', 'key=private key from firebase console')

$data= @"
 { "data": {"title": "from powershell", "content":"test"}, "to":"dFaEawjzUBkMuTS7XC03-g:APA91bEZaZbPruOGHyE5JyHwzEakkufe6V2HqGjkrmf_P6fw7tQGM8My-JHZX9b8gmSfmE_PUJp8hMc-8vvJU9drzznlCZg7GGXAfeTSHMKT-SpV1BsBc9yOBLwnzKGQDclPTlcqMTxS"}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data -SkipHeadersValidation
