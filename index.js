const { inlineSource } = require('inline-source');
const fs = require('fs');

inlineSource('src/html/index.html')
.then(html => {
  console.log(html);
}).catch(err => {
  console.log(err);
});
