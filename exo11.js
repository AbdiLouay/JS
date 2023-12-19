fetch(
    "http://192.168.65.77/test.json",
    {method: `GET`}
).then(
response => response.json()
).then(
    response2 => console.log(JSON.stringify(response2))
).catch(error => console.log("Erreur : " + error));

