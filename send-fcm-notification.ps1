
$headers=New-Object "System.Collections.Generic.Dictionary[[String],[String]]"

$headers.Add('Content-Type', 'application/json')
$headers.Add('Authorization', 'key=AAAAWeQ09i0:APA91bHY-cSdP5M2C9ZwMqbadxLyplxGLMHdJF09rXJ_eXFKR-eRnjdIzteHFZSkqTrKxgUMf7sNnQ2TYrohqd401XpumjNU2YrKddlKOuqhpNiGN41ypQcw628FXAT5XKYyqA0AitWY')

$data= @"
 { 
    "data": {
        "title": "from powershell test data", 
        "body":"body"
    }, 
    "body": {
        "title": "from powershell test", 
        "content":"test"
    }, 
    "to":"dFaEawjzUBkMuTS7XC03-g:APA91bEZaZbPruOGHyE5JyHwzEakkufe6V2HqGjkrmf_P6fw7tQGM8My-JHZX9b8gmSfmE_PUJp8hMc-8vvJU9drzznlCZg7GGXAfeTSHMKT-SpV1BsBc9yOBLwnzKGQDclPTlcqMTxS"
}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data -SkipHeaderValidation
