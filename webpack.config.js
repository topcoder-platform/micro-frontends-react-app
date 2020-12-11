/* global __dirname */

const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "topcoder",
    projectName: "micro-frontends-react-app",
    webpackConfigEnv,
  });

  // modify the webpack config however you'd like to by adding to this object
  return webpackMerge.smart(defaultConfig, {
    // we have to list here all the microapps which we would like to use in imports
    // so webpack doesn't tries to import them
    externals: {
      "@topcoder/micro-frontends-navbar-app":
        "@topcoder/micro-frontends-navbar-app",
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("file-loader", { paths: [__dirname] }),
          },
        },
      ],
    },
  });
};
