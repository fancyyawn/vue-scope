import Vue from 'vue'
import VueResource from 'vue-resource'
import VueResourceMock from 'vue-resource-mock'
import VueResourceMockData from './mock/mockProducts'

Vue.use(VueResource);

if(process.env.NODE_ENV === 'development'){
  Vue.use(VueResourceMock, {...VueResourceMockData});
}else{
  Vue.http.options.root = process.env.API_URL || 'http://localhost:3000';
}

export default Vue.http;


/*
Vue.http.options.root = process.env.API_URL || 'http://localhost:3000';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
 */
/*
 Vue.http.interceptors.push(function(request, next) {

 // modify method
 request.method = 'POST';

 // modify headers
 request.headers.set('X-CSRF-TOKEN', 'TOKEN');
 request.headers.set('Authorization', 'Bearer TOKEN');

 // continue to next interceptor
 next();

 // continue to next interceptor
 next(function(response) {

 // modify response
 response.body = '...';

 });

 // stop and return response
 next(request.respondWith(body, {
 status: 404,
 statusText: 'Not found'
 }));

 });

 */

/*
 get(url, [options])
 head(url, [options])
 delete(url, [options])
 jsonp(url, [options])
 post(url, [body], [options])
 put(url, [body], [options])
 patch(url, [body], [options])
 */

/*
 ## Options

 ### Parameter	Type	Description
 url:	string	URL to which the request is sent
 body:	Object, FormData, string	Data to be sent as the request body
 headers:	Object	Headers object to be sent as HTTP request headers
 params:	Object	Parameters object to be sent as URL parameters
 method:	string	HTTP method (e.g. GET, POST, ...)
 timeout:	number	Request timeout in milliseconds (0 means no timeout)
 before:	function(request)	Callback function to modify the request options before it is sent
 progress:	function(event)	Callback function to handle the ProgressEvent of uploads
 credentials:	boolean	Indicates whether or not cross-site Access-Control requests should be made using credentials
 emulateHTTP:	boolean	Send PUT, PATCH and DELETE requests with a HTTP POST and set the X-HTTP-Method-Override header
 emulateJSON:	boolean	Send request body as application/x-www-form-urlencoded content type
 */

/*
 ## Response
 ### Property	Type	Description
 url:	string	Response URL origin
 body:	Object, Blob, string	Response body data
 headers:	Header	Response Headers object
 ok:	boolean	HTTP status code between 200 and 299
 status:	number	HTTP status code of the response
 statusText:	string	HTTP status text of the response

 ### Method	Type	Description
 text()	Promise	Resolves the body as string
 json()	Promise	Resolves the body as parsed JSON object
 blob()	Promise	Resolves the body as Blob object
 */

/*
Vue.resource(url, [params], [actions], [options])

 get: {method: 'GET'},
 save: {method: 'POST'},
 query: {method: 'GET'},
 update: {method: 'PUT'},
 remove: {method: 'DELETE'},
 delete: {method: 'DELETE'}

 {
 var customActions = {
 foo: {method: 'GET', url: 'someItem/foo{/id}'},
 bar: {method: 'POST', url: 'someItem/bar{/id}'}
 }

 var resource = this.$resource('someItem{/id}', {}, customActions);

 // GET someItem/foo/1
 resource.foo({id: 1}).then(response => {
 this.item = response.body;
 });

 // GET someItem/1
 resource.get({id: 1}).then(response => {
 this.item = response.body;
 });

 // POST someItem/1
 resource.save({id: 1}, {item: this.item}).then(response => {
 // success callback
 }, response => {
 // error callback
 });

 // DELETE someItem/1
 resource.delete({id: 1}).then(response => {
 // success callback
 }, response => {
 // error callback
 });
 }
 */

