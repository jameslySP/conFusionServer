# example using express-generator <br>
from coursera https://www.coursera.org/learn/server-side-nodejs

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

later turned to full fledge REST API after learning mongoose examples https://github.com/jameslySP/node-mongoose

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