module.exports = {
     devtool: 'eval-source-map',
     entry: {
         main: [
             './src/main.js',
         ]
     },
     output: {
         filename: 'bundle.js'
     },

     module: {
         loaders: [
             {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ['react', 'es2015']
                }
              },
              {
                test: /\.scss$/,
                loaders: [
                  'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'
                ]
              }

         ]
     }
 }
