# MapUpAssignment

This is a backend service that finds the intersection point of a given line. It provides a POST API endpoint that takes a long LineString as the request body and sends a response with the intersection point along with the line ID. The API endpoint is protected with a header-based authentication check.
## API Contract
#### Endpoint
URL: "/intersection/line"

HTTP Verb: POST
#### Request Body: 
{

    "type": "LineString",

    "coordinates": [
                      [-5,0],
                      [0,5],
                      [5,0],
                      [10,5],
                      [0,0]
                   ]
#### }

#### Response Body: 
[

    {
    
        "lineId": "L43",
        "point": [
            [-3,2],
            [3,2],
            [7,2],
            [4,2]
          ]
    }
    
]
#### ResponseBody On Error:
{

    "errorMessage": "Request Body is Invalid"
    
}

This API is protected with a header-based authentication check. If a valid auth header is not provided, the API will respond with an error message: "Unauthorized request". Additionally, the request body is validated to ensure it is valid. For validating the request, I have added a middleware to Filter the request.

If the incoming request is authorized and the request body is valid, the API handles the request using the specified HTTP method handler and a callback function is used to set the response and return it.

## Constructive Alogorithm to find Intersection of longLineString and line.
We have given a longLineString and few Random line and we have to return the point of intersection of random line with longLineString along with lineId of random line.

For Finding the intersection point, i have done following steps:
##### Step 1:
We have longLineString with(5K points) so I have splitted these line into (5K-1) line segment so that for each Random line i will calculating the intersection point.

##### Step 2:
For each Random line that is spread over in plane, i am calcualting the slope with each splitted line of longLineString.
if slopes are equal then we have either coincident or parallel line there will be no intersection point, so for these type of pair of line, i am returning empty Array.
##### Step 3:
If slope are not equals then i calcualted the intersection point of random line and with all splitted line of LineStirng whose slope are not equals with random line using Mathematical Approach and check whether an intersection point lies with line segment of not.

##### Step 4:
After Finding intersection point, I have framed the response value as Array of Object as follows :

[

     {

            LineId:"L02",

            Point:[[2,4],[6,2],[4,3]]

      }

]

So these are the step i have followed to find the intersection points.

## Testing the API
To test the API, I used Postman. Here are the steps I followed:

1. Create a new tab in Postman.

2. Set the API contract values in the request, including the auth header and request body.

3. Send the request and observe the response.

         a.If the auth header is invalid or not provided, the response will contain an error message: "Unauthorized request".
         
         b.If the request body is invalid, such as improper format or missing values, the response will contain an error message: "Request body is invalid".
   
This is how I tested the API using Postman.

### Thank you for your attention.









