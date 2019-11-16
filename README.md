# Use-Sass-in-React-project
# Sample project how use Sass in React project
# Adding a Sass Stylesheet
# https: //create-react-app.dev/docs/adding-a-sass-stylesheet/
#add object:
      {
        test: /\.sass$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      }
