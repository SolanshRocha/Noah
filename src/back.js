const sqlite3 = require('sqlite3').verbose();

const express = require('express');
const app = express();
const cors = require('cors'); 
const bodyParser = require('body-parser');

const dbFile = 'noah.db';
const db = new sqlite3.Database(dbFile);
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

db.serialize ( () => {
    console.log("Noah Beschen");
    db.run('CREATE TABLE IF NOT EXISTS type (type_id INTEGER PRIMARY KEY AUTOINCREMENT, type_name TEXT)');
    
    db.run('INSERT INTO type (type_name) VALUES (?)', 'Articles');
    db.run('INSERT INTO type (type_name) VALUES (?)', 'Coverpage');

    db.run('CREATE TABLE IF NOT EXISTS articles_category (articles_category_id INTEGER PRIMARY KEY AUTOINCREMENT, articles_category_name TEXT)');

    db.run('INSERT INTO articles_category (articles_category_name) VALUES (?)', 'News');
    db.run('INSERT INTO articles_category (articles_category_name) VALUES (?)', 'Stories');
    db.run('INSERT INTO articles_category (articles_category_name) VALUES (?)', 'Woman high Performances');
    db.run('INSERT INTO articles_category (articles_category_name) VALUES (?)', 'Man high performances');
    db.run('INSERT INTO articles_category (articles_category_name) VALUES (?)', 'Start surfing');


    db.run('CREATE TABLE IF NOT EXISTS articles (articles_id INTEGER PRIMARY KEY AUTOINCREMENT, articles_name TEXT, articles_title TEXT, articles_photo TEXT, articles_category_id INTEGER, type_id INTEGER, FOREIGN KEY(articles_category_id) REFERENCES articles_category(articles_category_id), FOREIGN KEY (type_id) REFERENCES type(type_id))');
   
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Bethany', 'Bethany Hamilton confirms maddog lunarit legend status with total conquering of chopes', "Bethany/bet1.jpg", 1, 1);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Medina-claim', 'world title: Medina claims his second world title', "Medina-claim/medina.jpg", 1, 1);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'pipemaster','Sean Doherty: Pipe day 1 - war pigs', "pipemaster/pipemaster1.jpeg", 1, 1);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Sean', 'Sean Doherty: Pipe day 1 - war pigs', "Sean/wilson.jpg", 1, 1);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'teambilla', 'Billabong teal barbie is a sweet gathering of the tribe', "teambilla/billabong.jpg", 1, 1);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', '90woman', 'We celebrate the heroic woman of 90’s pro surfing', "90woman/women.jpg", 1, 2);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Koa', 'The wit & wisdom of Tim Bonython', "Koa/koasmith.jpg", 1, 2);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Wit', 'How to surf 20 foot Uluwatu', "Wit/thewit.jpg", 1, 2);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Frieda Zamba', 'Frieda Zamba', "Frieda Zamba/frieda.jpg", 1, 3);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Layne Beachley', 'Layne Beachley', "Layne Beachley/Layne.jpg", 1, 3);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Lisa Andersen', 'Lisa Andersen', "Lisa Andersen/lisa.jpg", 1, 3);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Wendi botha', 'Wendi botha', "Wendi botha/wendib.jpg", 1, 3);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', '157tricks', ' Exactly 157 tricks', "157tricks/157tricks.jpg", 1, 4);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Kgi', 'Mexican do giant airs', "Kgi/kgi.jpg", 1, 4);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'the-curl', 'Another decade ripping the curl', "the-curl/thecurl.jpg", 1, 4);
    db.run('INSERT INTO articles (articles_name, articles_title, articles_photo, articles_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Coaching', 'About coaching', "Coaching/kid.jpg", 1, 5);

    db.run('CREATE TABLE IF NOT EXISTS coverpage_category (coverpage_category_id INTEGER PRIMARY KEY AUTOINCREMENT, coverpage_category_name TEXT)');

    db.run('INSERT INTO coverpage_category (coverpage_category_name) VALUES (?)', 'Bethany Hamilton');
    db.run('INSERT INTO coverpage_category (coverpage_category_name) VALUES (?)', 'Kali');
    db.run('INSERT INTO coverpage_category (coverpage_category_name) VALUES (?)', 'Quiksilver');

    db.run('CREATE TABLE IF NOT EXISTS coverpage (coverpage_id INTEGER PRIMARY KEY AUTOINCREMENT, coverpage_name TEXT, coverpage_video TEXT, coverpage_description TEXT, coverpage_category_id INTEGER, type_id INTEGER, FOREIGN KEY(coverpage_category_id) REFERENCES coverpage_category(coverpage_category_id), FOREIGN KEY (type_id) REFERENCES type(type_id))');

    db.run('INSERT INTO coverpage (coverpage_name, coverpage_video, coverpage_description, coverpage_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Bethany Hamilton', "BethanyHamilton/Maldives.mp4", '“I WAS HOPING IT WAS A BIT BIGGER.”', 1, 2);
    db.run('INSERT INTO coverpage (coverpage_name, coverpage_video, coverpage_description, coverpage_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Kali', 'Stretchy, Quik Dry & LightLes boardshorts Quiksilver Highline sont conçus pour la performance.', "Kali/video2.mp4", 2,2);
    db.run('INSERT INTO coverpage (coverpage_name, coverpage_video, coverpage_description, coverpage_category_id, type_id) VALUES (?, ?, ?, ?, ?)', 'Quiksilver', 'Adapt collection Des modèles confortables conçus pour vous garder au frais et chaud quelles que soient les conditions extérieures.', "Quiksilver/VideoQuiksilver.mp4", 3, 2);
 
    db.run('CREATE TABLE IF NOT EXISTS comments (comments_id INTEGER PRIMARY KEY AUTOINCREMENT, comments_body VACHAR(250), articles_id INTEGER, FOREIGN KEY (articles_id) REFERENCES articles(articles_id))')

    db.all('SELECT * FROM type NATURAL JOIN articles_category NATURAL JOIN articles', function(error, data) {
        if (!error) console.log(data);
      else console.log(error);
    })
});


app.get('/', function(request, response) {
    db.all('SELECT * FROM type NATURAL JOIN articles_category NATURAL JOIN articles', function(error, data) {
        if (!error) response.send(data);
      else console.log(error);
    })
})

app.get('/coverpage', function(request, response) {
    db.all('SELECT * FROM type NATURAL JOIN products NATURAL JOIN products_category', function(error, data) {
        if (!error) response.send(data);
      else console.log(error);
    })
  });

app.get('/comments', function(request, response){
    db.all('SELECT * FROM comments', function(error, data) {
      if (!error) response.send(data);
      else console.log(error);
    })
  });
  
  app.post('/comments', function (request, response){
    db.run('INSERT INTO comments (comments_body) VALUES (?)', request.body.comments, function(error) { 
      if(!error) response.send("here it is");
      else console.log(error);
    })
  }) 

  app.listen(3000, function(error) {
    if (!error) console.log("Bonjour");
  else console.log(error);
  })
  
