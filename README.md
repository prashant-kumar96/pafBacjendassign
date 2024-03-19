# pafBacjendassign

1-Run the server by the command node index.js

2- this is the curl of the login api
curl -X POST -H "Content-Type: application/json" -d "{\"username\":\"PRASHANT\", \"password\":\"!@3qwaSZ\"}" http://localhost:3500/login

3- This is the curl of getCountry information
you may need to change the Bearer token because it may have expired
a.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" http://localhost:3500/api/countryInformation?country=Iran
b.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" http://localhost:3500/api/countryInformation?country=India

4- This is the curl of getCountriesByLanguage api
you may need to change the Bearer token because it may have expired
a.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByLanguage?sort=ascending&page=1&language=english"

b.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByLanguage?sort=ascending&page=1&language=hindi"

c. curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByLanguage?sort=descending&page=1&language=english"

5- This is the curl of getCountriesByArea api
you may need to change the Bearer token because it may have expired
a.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByArea?sort=descending&page=1&area=ASIA&pageSize=7"

b.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByArea?sort=descending&page=1&area=AFRICA&pageSize=7"

c.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByArea?sort=ascending&page=1&area=AFRICA&pageSize=5"

6- This is the curl of getCountriesByArea api
you may need to change the Bearer token because it may have expired
a.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByPopulation?filter=smallest"

b.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByPopulation?filter=largest"

c.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByPopulation?filter=greaterThan&providedValue=100000"

d.
curl -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA4Njg1MzgsImV4cCI6MTcxMDg5MDEzOH0.TUE4uxjzPJ01h0hci9-9CGzWV2OrE5VrFHwlzxDkt08" "http://localhost:3500/api/getCountriesByPopulation?filter=smallerThan&providedValue=100000"

---

Login Api extra information
Hit the post api on path 'http://localhost:3500/login' and send
{
"username":"PRASHANT",
"password":"!@3qwaSZ"
}
in the body.
these are stored in the .env file in the code. these will be compared from the login api and a json data with token will be sent to the user.
The user has to send that BEARER TOKEN as authorization with every other api, otherwise other apis's will not run.
The token will expire in 6 hours, so after 6 hours, the new token has to be created before using other api's.

---

get countryInformation api extra information
Hit the api 'http://localhost:3500/api/countryInformation?country=Iran' and also send the token as a Bearer token and we will get a json data with detailed information about the country Iran.
here we can send any country name in the parameter country

---

getCountriesByLanguage api extra information
Hit the api 'http://localhost:3500/api/getCountriesByLanguage?sort=ascending&page=1&language=english' and also send the token as a Bearer token.
We will get a json data with 5 countries, total number of countries, current page, pageSize(number of items per page), and total number of pages.
eg =>
{
"totalItems": 91,
"page": "1",
"pageSize": 5,
"totalPages": 19,
"data": [
"American Samoa",
"Anguilla",
"Antigua and Barbuda",
"Australia",
"Bahamas"
]
}
Here we can send
language = "Hindi" or any language of your choice
sort=descending to get data in the descending order.
page= any number
pageSize=7 ,pageSize is the number of results per page

---

getCountriesByArea extra information
Hit the api 'http://localhost:3500/api/getCountriesByArea?sort=descending&page=1&area=ASIA&pageSize=7' and also send the token as a Bearer token.

eg=>
{
"totalItems": 50,
"page": "1",
"pageSize": "7",
"totalPages": 8,
"data": [
"Afghanistan",
"Armenia",
"Azerbaijan",
"Bahrain",
"Bangladesh",
"Bhutan",
"Brunei"
]
}
Here we can send
area = "AFRICA" or any continent of your choice
sort=descending to get data in the descending order.
page= any number
pageSize=7 ,pageSize is the number of results per page
We will get a json data with 7 countries of continent ASIA, total number of countries, current page, pageSize(number of items per page), and total number of pages.

---

getCountriesByPopulation extra information
Hit the api 'http://localhost:3500/api/getCountriesByPopulation?filter=smallest' and also send the token as a Bearer token.
we will get a json data with a countryName and a population
{
"countryName": "Bouvet Island",
"population": 0
}
filters of population
we can filter the getcountriesbypopulation api by these parameters:
provide filter = largest,
provide filter = smallest,
providefilter = greaterThan, and provide a value, example value=1000000
providefilter=smallerThan, and provide a value, example value=10000
