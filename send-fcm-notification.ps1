
function Send-FcmPushNotification {
    param (
        [Parameter(Mandatory)][string] $AutToken,
        [Parameter()][string] $NotificationData,
        [Parameter()][string] $Title,
        [Parameter()][string] $Url,
        [Parameter(Mandatory)][string] $Message,
        [Parameter(Mandatory)][string] $To
    )
    $headers=New-Object "System.Collections.Generic.Dictionary[[String],[String]]"

    $headers.Add("Content-Type", "application/json")
    $headers.Add("Authorization", "key=$Authtoken")
    
    $data = @"
    {
       "data": {
           "title": "$Title", 
           "body": "$Message",
           "url": "$Url"
           "onClick": "()=>{alert('test');}"
       }, 
       "to": "$To"
   }
"@

    Invoke-RestMethod -Method Post -Uri "https://fcm.googleapis.com/fcm/send" -Headers $headers -Body $data -SkipHeaderValidation
    
}

$authToken = "********************"


$to = "*******************"
$title = "Message from Powershell"
$message = "new message sent from powershell script"
$url = "https://github.com/mouadcherkaoui/push-notifications-demo"
Send-FcmPushNotification -AutToken $authToken -To $to -Title $title -Message $message -Url $url 
