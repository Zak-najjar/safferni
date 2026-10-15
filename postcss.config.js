import postcsspresetenv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer'; 

export default {
  plugins : [
    // 'postcss-preset-env': {
    //   stage : 2
    // },
    postcsspresetenv ({
      stage: 2
    }),
    autoprefixer ({})
  ]
}