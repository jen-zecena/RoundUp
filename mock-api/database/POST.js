POST
/user

CASE 4:
Body:
{
    "id": 3,
    "userName": "goodBoy",
    "age": 35
}
=>
Status: 201
Response:
{
    "id": 3,
    "userName": "goodBoy",
    "age": 35
}

CASE 5:
Body:
{
    "id": 1,
    "userName": "harvey",
    "age": 20
}
=>
Status: 209
Response:
{
    "errorMessage": "UserId already exists"
}
