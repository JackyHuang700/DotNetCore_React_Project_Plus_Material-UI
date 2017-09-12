const webpack = require('webpack');
const bundleOutputDir = './wwwroot/dist';
const path = require('path');


//共用設定loader檔
const loaders = require('./webpack.loaders.js');


const NODE_ENV = process.env.NODE_ENV;

let plugins = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DllPlugin({
        path: path.join(__dirname, bundleOutputDir) + '/[name]-manifest.json',
        name: "[name]_[hash]",
        context: __dirname,
    }),
];
if (NODE_ENV === "product") {
    plugins = plugins.concat([
            //產品
            new webpack.optimize.UglifyJsPlugin({
                unused: true,
                sourceMap: true,
                warnings: false,
            }),
        ]
    );
}

module.exports = {
    entry: {
        "commons": [
            // 'react-hot-loader/patch',
            // "react-hot-loader",
            'react',
            'react-dom',
            'react-router-dom',
            'babel-polyfill',
            "axios",
            "react-easyform",
            "history",
            "reactstrap", //0.74MB
            "bootstrap",
            "event-source-polyfill",
            // "react-scripts",
            // "aspnet-webpack",
            // "aspnet-webpack-react",
            "./node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css",

            //datepicker package
            'react-datepicker',
            "moment",
            "./node_modules/react-datepicker/dist/react-datepicker.css",
            "material-ui",
            "react-redux",
            "redux",
        ],
    },
    resolve: {
        extensions: ['.js']
    },
    module: loaders,
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name].js',
        library: "[name]_[hash]",
        publicPath: '/dist/',
    },
    context: __dirname,
    plugins: plugins,
};