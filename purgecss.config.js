const fs = require('fs');
const path = require('path');

// Define the DIST_PATH and ensure the directory is cleaned
const DIST_PATH = '_sass/dist';

fs.rm(DIST_PATH, { recursive: true, force: true }, (err) => {
  if (err) {
    throw err;
  }
  fs.mkdirSync(DIST_PATH);
});

module.exports = {
  content: [
    path.resolve(__dirname, '_includes/**/*.html'),
    path.resolve(__dirname, '_layouts/**/*.html'),
    path.resolve(__dirname, '_javascript/**/*.js')
  ],
  css: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
  keyframes: true,
  variables: true,
  output: path.resolve(__dirname, `${DIST_PATH}/bootstrap.css`),
  safelist: {
    standard: [/^collaps/, /^w-/, 'shadow', 'border', 'kbd'],
    greedy: [/^col-/, /tooltip/]
  }
};
