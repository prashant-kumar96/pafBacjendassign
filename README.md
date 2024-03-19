# pafBacjendassign

1-Run the server by the command node index.js

2- Hit the post api on path 'http://localhost:3500/login' and send
{
"username":"PRASHANT",
"password":"!@3qwaSZ"
}
in the body.
these are stored in the .env file in the code. these will be compared from the login api and a json data with token will be sent to the user.
The user has to send that BEARER TOKEN as authorization with every other api, otherwise other apis's will not run.
The token will expire in 6 hours, so after 6 hours, the new token has to be created before using other api's.

3- Hit the api 'http://localhost:3500/api/countryInformation?country=Iran' and also send the token as a Bearer token and we will get a json data with detailed information about the country Iran.
here we can send any country name in the parameter country

4- Hit the api 'http://localhost:3500/api/getCountriesByLanguage?sort=ascending&page=1&language=english' and also send the token as a Bearer token.
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

5- Hit the api 'http://localhost:3500/api/getCountriesByArea?sort=descending&page=1&area=ASIA&pageSize=7' and also send the token as a Bearer token.

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

6-
5- Hit the api 'http://localhost:3500/api/getCountriesByPopulation?filter=smallest' and also send the token as a Bearer token.
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
