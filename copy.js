var copy = require('copy');

copy('styles.css', 'dist/public', function(err, files) {
  if (err) throw err;
  console.log("Coping")
  copy('images/**', 'dist/public/images', function(err, files) {
  if (err) throw err;
 
});
  
});


