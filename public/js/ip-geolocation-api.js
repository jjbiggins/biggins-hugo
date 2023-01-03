// Function to handle the response from IP Geolocation API.
// "response" is a JSON object returned from IP Geolocation API.
function handleResponse(response) {
    console.log(response);
}


// Get geolocation for the calling machine's IP address with an API key (optional, if you're using "Request Origin" feature at IP Geolocation API)
_ipgeolocation.getGeolocation(handleResponse, "c6b397d9f250470a81819801ad43dd03");

// Don't pass the API key if you're using the "Request Origin" feature at IP Geolocation API
_ipgeolocation.getGeolocation(handleResponse);

// Toggle sessionStorage usage to store API response on client-side. (This is very handy as it will help users to avoid making duplicate API calls for a single visitor.)
_ipgeolocation.enableSessionStorage(true);

// Toggle API calls' async behavior. By default, async is true.
_ipgeolocation.makeAsyncCallsToAPI(false);

// Get geolocation for an IP address "1.1.1.1"
_ipgeolocation.setIPAddress("1.1.1.1");
_ipgeolocation.getGeolocation(handleResponse, "c6b397d9f250470a81819801ad43dd03");

// Get geolocation for an IP address "1.1.1.1" in Russian language **
_ipgeolocation.setLanguage("ru");
_ipgeolocation.setIPAddress("1.1.1.1");
_ipgeolocation.getGeolocation(handleResponse, "c6b397d9f250470a81819801ad43dd03");

// Get the specific geolocation fields "country_code2,time_zone,currency" for the calling machine's IP address
_ipgeolocation.setFields("geo,time_zone,currency");
_ipgeolocation.getGeolocation(handleResponse, "c6b397d9f250470a81819801ad43dd03");

// Get the specified geolocaiton fields like "country_code2,time_zone,currency" for an IP address "1.1.1.1" and skip the "ip" field in the response
_ipgeolocation.setFields("geo,time_zone,currency");
_ipgeolocation.setIPAddress("1.1.1.1");
_ipgeolocation.setExcludes("ip");
_ipgeolocation.getGeolocation(handleResponse, "c6b397d9f250470a81819801ad43dd03");
