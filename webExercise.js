//Part One: Solidify Terminology

//In your own terms, define the following terms:
//What is HTTP?
Answer: Hypertext Transfer Protocol is a set of polices/rules that 
dictate how a browser and a server must communicate with 
each other

//What is a URL?
Answer: The web address of a web resource in a network. 
It takes a hostmane, makes it into an IP Adress, connects
with the IPA on port 80, and using the HTTP Protocol
it asks for the Data Resource.

//What is DNS?
Answer: Domain Name System is like a phonebook for the web.
It takes a hostname like "instagram", and turns it into 
its corresponding IP Adress.

//What is a query string?
Answer: It allows the URL to pass arguments that are separated
by &.  ex:  ?x=1&y=2

//What are two HTTP verbs and how are they different?
Answer: POST and GET. 
Post: Is a request that changes the server's data
Get: Is a request that does Not change the server.

//What is an HTTP request?
Answer: Is a request to the server for some Data. 
the request follows the HTTP Protocol. Usually
redquest from some HTML

//What is an HTTP response?
Answer: Is the response from the server following
the HTTP Protocol. The response comes back with a
status code and sends back some HTML, CSS and JS.

//What is an HTTP header? Give a couple examples of request and response headers you have seen.
Answer: a header provides additional information of the request
and the response. 
Examples:
date: Sun, 15 Jan 2023 02:29:34 GMT
content-type: text/html; charset=utf-8
access-control-allow-headers: User-Agent, Content-Type
access-control-allow-methods: GET
access-control-allow-origin: *
access-control-max-age: 86400
access-control-request-method: GET
cache-control: max-age=0, must-revalidate, no-cache, no-store, public, s-maxage=0
retry-after: 60
x-frame-options: DENY
x-ratelimit-limit: 100
x-ratelimit-remaining: 99
x-ratelimit-reset: 1673749835
x-xss-protection: 1; mode=block
cf-cache-status: DYNAMIC

//What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
Answer: It takes a hostmane, makes it into an IP Adress, connects
with the IPA on port 80, and using the HTTP Protocol
it asks for the Data Resource. Than, html Data is return. In addition,
it looks for other likns and sources in the page. If found,
it creates requests for each one of them.