// const fs = require('browserify-fs');
// const path = require('path');
//
// const cssFiles = [];
// const scssSrc = '/build/css';
//
// fs.readdirSync(path.join(__dirname, scssSrc)).forEach((file) => {
//   const { ext } = path.parse(file);
//   if (ext === '.css') {
//     cssFiles.push(path.join(scssSrc, file));
//   }
// });
//
// function loadCss() {
//   cssFiles.forEach((css) => {
//     const link = document.createElement('link');
//     link.type = 'text/css';
//     link.rel = 'stylesheet';
//     link.href = `${scssSrc}/${css}`;
//
//     const head = document.head || document.getElementsByTagName('head')[0];
//     head.appendChild(link);
//   });
// }
//
// loadCss();
