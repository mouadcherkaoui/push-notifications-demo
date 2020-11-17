
$headers=New-Object "System.Collections.Generic.Dictionary[[String],[String]]"

$headers.Add('Content-Type', 'application/json')
$headers.Add('Authorization', 'key=AAAAWeQ09i0:APA91bGFCjMvlMlIXRGkqFyKb_of6jQDMQjyo9GbfwtrhG3vtZyYBZLZSG5TYZddTIuqLX_ziCT-_vMsWnGCfQhNYWPcawsziPN0ozZsWLujb9j4caV8nLDUHcf_IjnY2ml61qkH2H09')

$data= @"
 { 
    "data": {
        "title": "from powershell test data", 
        "body":"body",
        "onClick": "()=>{alert('test');}"
    }, 
    "to":"f5ndavbcJdMcVMpfztE_Sy:APA91bG5Ody2Sa3ZAdpoMXHt6weIJArViqKF6RzJtGReJoyPq-dU6t6uMKRlnMEeAqRRldHGvJD5ysQbEKZeSlynHO_dWgixOEE8MBd1_lafPBI94mRlnxShN2XEm698serEER_JNh0-"
}
"@


Invoke-RestMethod -Method Post -Uri 'https://fcm.googleapis.com/fcm/send' -Headers $headers -Body $data -SkipHeaderValidation
