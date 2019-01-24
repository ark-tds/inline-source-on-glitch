const { inlineSource } = require('inline-source');
const fs = require('fs');

inlineSource('src/html/index.html')
.then(html => {
  fs.writeFileSync('dist/html/index.html', html);
}).catch(err => {
  console.log('failed');
});
