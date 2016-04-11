## Compiling the JSX

browserify -t [ babelify --presets [ react ] ] views/main.js -o web/bundle.js
