<?php

$json = '{
"notification":
{
    "title": "テスト送信",
    "body": "This Is 送信テストです"
},
"to": "AAAAmF1CDks:APA91bGRnf48JuBwhH8DVSdIputxn1nmGSCYOWBAjp7ASOnN_-Wa-nXfLiGJVFdQzGYHmYwKKYfFODu3juzqaj6mkYDEQfM2Kszc0r-5SrH7XjVdi84EVfdFiXdcxTIAFxzDHd8u1n9j"}';

$ch = curl_init();

$headers = array(
    'Content-Type: application/json',
    'Authorization: -----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCXIb1uBdTW6idF\nSRWG8hsULjLPsOIQpQG/x1qT8nxDfG9s59jYpjnRQHeDiZ4Y3w3sumqva3I2e2E1\nESVGsSWqiCfLzoniJvHjOVQPU8MsqyVKbRW75S2QmCim1Rg4r3desOFC3XGKDd2v\nek6C2bYY0l8qThUSwLFjiu1rB5MwKPJB9wq2MqkPGMcerNn3yBreDpeaEH1gujT/\nme+TaAJZI49DZoK2yxswAhdvupWYKjl9xQ2+Hrd14T18oonNaubqsrxQj+O0VhgL\nMS/LqmajhiqAHYnmfwDEsOh2MO5OzLEi/OcljNJ+L/pQyzzrGX5DNPrQWBiaGmMV\nRb0CB3wjAgMBAAECggEASD9bYLjN7i2Ct3cAIQIlGskZBjtfXqibBPSGovpFGDfo\nxm2xNqSEODmyyIFlwCsFa5kUPibFszDZH/bB1KEDyhmLuLzUInYOpVq3Chq3T2fD\njGhIfwnIdfqfWF2/Vf3fuTcigIX+7InDY8s6tAfiqswKrV0latEOG/GCnOtCnD8C\ntfhlMc9PB+PhSFA9cnCdEceNCHEeemoGgPX9uBPYRE1z5pdVE5wvb2fZ0tkp4BOP\nXnZAbavF2/UfO2WQWv/Qudyv8rd/feb4hOJaz4EqMMF8U/QG7/bWv9yDddNv0o5M\ny2Ay6aWmNYN6wG4qkUeD3KKTuZ+v0ValzTavmpdfDQKBgQDICF49sAhVC2uZ6Q1J\n0lEgFkbWluHs/3jpDdCSBhk7fwJVNKLF5pqgoNDYsS4aOeTqsjlDCa1zN4mmKW0s\nZgCj4lkZ2tG8zr4b2BWQ/B8jDGr/MKMW2Ng1YHq2khkxs+X92mC7XopUHWzMFBnC\nJvzI7ns0S1G8uzz0kf3ZvO/wPQKBgQDBasZCk9qpAGNmwfri8ZsNJWSOlXc9SVzG\n8ReSFYqvbqK9JNya8rgBkDlDZW316f6yW2hOHWui6MLYS1AJqB0EfRv682upbsrx\nBL3K9f94Jezbr8PWAsgVD7xNYmRUERWiBkvvfc6znLJcsfvI1IcF1zdjeYdWfVeC\nKmxN5M6D3wKBgBgiQlSI/4hbN2E7Z/oHIPiRF3zeeWWhsRHVM9vaVoMCIOLs1dKw\nrulAXdI3Fkvdvku+sv/uk/m5sqbUirJ3oA4lygA/kVyJSRCM8pUqhgsxfVtKn/Kq\nuPM/r66FU/rWLKKDDXatwlzBrBW3OyBcmdUYSM8XY0Y1BPaxAoKZtA01AoGADtL/\nNRUd+jwEYljVwNUhvCU0itUb2X+o87qAwvqRsZZ6NKMBoYKe5cfHC8pXXjS8B7GH\n0gzhNhA+9tL25HaVGsX4AgjsJIVQWp6xaT/nf67wc3oKOXnnGe4l0YyMAgF5Nfzj\njwyGbi/BX+doU+EuJB11qlMjM1bSATD9Mg8qYOMCgYAaLDI817oDm6GcFLlBYjE2\nSIMjPVGW2fA88DzeS/CUqYPoM3PMsPO6Jlc+u3Pr6+zaLUculfuANvtst5/KF7Ev\nvLwuZUCH9/O+3BEarITi/8/zikS+tWtXPnHwMV2ixnqkrPJViqE/2kITSFDEkheg\nAw0sh6ueGO5M7mhnB3eyxg==\n-----END PRIVATE KEY-----\n'
);

curl_setopt_array($ch, array(
    CURLOPT_URL => 'https://fcm.googleapis.com/fcm/send',
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => $json
));

$response = curl_exec($ch);

curl_close($ch);

?>

