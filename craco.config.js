const path = require('path')
const resolve = dir => path.resolve(__dirname, dir);
//别名的设置
module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components")
        }
    }
}