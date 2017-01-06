module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style-loader", "css-loader",
             "sass-loader"]
           }
         ]
    }
};
