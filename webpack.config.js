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

             }
         ]
     }
 }