## coursera link
from coursera https://www.coursera.org/learn/server-side-nodejs

## important lessons
1. Full REST API with Express, MongoDB, and Mongoose
* Part 1 (video) https://www.coursera.org/learn/server-side-nodejs/lecture/ceE9r/exercise-video-rest-api-with-express-mongodb-and-mongoose-part-1
* Part 2 (video) https://www.coursera.org/learn/server-side-nodejs/lecture/w9ha9/exercise-video-rest-api-with-express-mongodb-and-mongoose-part-2
* Part 1 (text) https://www.coursera.org/learn/server-side-nodejs/supplement/XIMQE/exercise-instructions-rest-api-with-express-mongodb-and-mongoose-part-1
* Part 2 (text) https://www.coursera.org/learn/server-side-nodejs/supplement/mpNR7/exercise-instructions-rest-api-with-express-mongodb-and-mongoose-part-2

2. auth with passport
* (video) https://www.coursera.org/learn/server-side-nodejs/lecture/B1EkT/exercise-video-user-authentication-with-passport
* (text) https://www.coursera.org/learn/server-side-nodejs/supplement/F1GIQ/exercise-instructions-user-authentication-with-passport

3. JSON Web token 
* (video) https://www.coursera.org/learn/server-side-nodejs/lecture/smZ4q/exercise-video-user-authentication-with-passport-and-json-web-token
* (text) https://www.coursera.org/learn/server-side-nodejs/supplement/y3zWc/exercise-instructions-user-authentication-with-passport-and-json-web-token

## maybe look into before deploying
4. HTTPS server
* (video) https://www.coursera.org/learn/server-side-nodejs/lecture/14M6u/exercise-video-https-and-secure-communication
* (text) https://www.coursera.org/learn/server-side-nodejs/supplement/H5RKY/exercise-instructions-https-and-secure-communication

5. Cross Origin Resource Sharing 
* (video) https://www.coursera.org/learn/server-side-nodejs/lecture/egbQ1/exercise-video-cross-origin-resource-sharing
* (text) https://www.coursera.org/learn/server-side-nodejs/supplement/lHl20/exercise-instructions-cross-origin-resource-sharing


## cmd line notes

create express scaffolding
```
npm install express generator -g
express conFusionServer
cd conFusionServer
npm install
npm start
```

how to get OpenSSL on windows https://blog.didierstevens.com/2015/03/30/howto-make-your-own-cert-with-openssl-on-windows/

OpenSSL commands for windows
```
genrsa -out private.key 1024
req -new -key private.key -out cert.csr
x509 -req -in cert.csr -signkey private.key -out certificate.pem
```

OpenSSL commands for Unix/Mac
```
openssl genrsa 1024 > private.key
openssl req -new -key private.key -out cert.csr
openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
```

you can find an example of a dish in JSON format in the db.json file
so you can use it to test the API in Postman <br>
or you can find them below <br>

dish example
```
{
    "name": "Uthappizza",
    "image": "images/uthappizza.png",
    "category": "mains",
    "label": "Hot",
    "price": "4.99",
    "featured": "true",
    "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
    "comments": [
        {
            "rating": 5,
            "comment": "Imagine all the eatables, living in conFusion!",
            "author": "John Lemon",
            "date": "2012-10-16T17:57:28.556094Z"
        },
        {
            "rating": 4,
            "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            "author": "Paul McVites",
            "date": "2014-09-05T17:57:28.556094Z"
        },
        {
            "rating": 3,
            "comment": "Eat it, just eat it!",
            "author": "Michael Jaikishan",
            "date": "2015-02-13T17:57:28.556094Z"
        },
        {
            "rating": 4,
            "comment": "Ultimate, Reaching for the stars!",
            "author": "Ringo Starry",
            "date": "2013-12-02T17:57:28.556094Z"
        },
        {
            "rating": 2,
            "comment": "It's your birthday, we're gonna party!",
            "author": "25 Cent",
            "date": "2011-12-02T17:57:28.556094Z"
        }
    ]
}
```

promotion example
```
 {
      "name": "Weekend Grand Buffet",
      "image": "images/buffet.png",
      "label": "New",
      "price": "19.99",
      "description": "Featuring . . .",
      "featured": false
}
```

leader example
```
{
      "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, . . .",
      "featured": false
}
```