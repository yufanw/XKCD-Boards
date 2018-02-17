var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected');

  var comicSchema = mongoose.Schema({
    img: STRING,
    link: STRING,
    num: NUMBER,
    title: STRING,
    year: STRING
  });

  var Comic = mongoose.model('Comic', comicSchema);

  var test = new Comic({title: 'test', year: '2018'})
  console.log(test.title);
});