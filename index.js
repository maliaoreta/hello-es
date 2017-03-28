const Elasticsearch = require('aws-es');

elasticsearch = new Elasticsearch({
  accessKeyId: 'XXXXXXXX',
  secretAccessKey: 'XXXXXXXXXX',
  service: 'es',
  region: 'us-east-1',
  host: 'XXXXXXXXXX-XXXXXXXXXXXXXX.us-east-1.es.amazonaws.com'
});

// to create new 'test' index with a post titled 'Testing upload'
elasticsearch.index({
  index: 'test',
  type: 'posts',
  id: '1',
  body: {
    title: 'Testing upload',
  }
}, (err, data) => {
  if (err) {
    console.log(`ERROR from INDEX: ${err}`)
  } else {
    console.log('json reply received from INDEX');
    console.log('data: ', data);
  }
});

// GET post titled 'Testing upload' from 'test' index
// elasticsearch.get({
//   index: 'test',
//   type: 'posts',
//   id: '1'
// }, (err, data) => {
//   if (err) {
//     console.log(`ERROR from GET: ${err}`)
//   } else {
//     console.log('json reply received from GET');
//     console.log('data: ', data);
//   }
// });

// delte an index
// elasticsearch.delete({
//   index: 'test'
// }, function(err, data) {
//   if (err) {
//     console.log(`ERROR from DELETE: ${err}`)
//   } else {
//     console.log('json reply received from DELETE INDEX');
//     console.log('data: ', data);
//   }
// });
