const yaml = require('js-yaml');
const fs   = require('fs');

try {


  var doc = yaml.safeLoad(fs.readFileSync(__dirname + '/static/admin/config.yml', 'utf8'));
  doc.collections.forEach(collection => {
    if ( collection.files && collection.files.length) {
      collection.files.forEach(file => {
        console.log(file);
      });
    }
  });
} catch (e) {
  console.log(e);
}

