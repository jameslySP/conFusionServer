# example using express-generator

create express scaffolding
```
npm install express generator -g
express conFusionServer
cd conFusionServer
npm install
npm start
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