/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
 */

module.exports={
  lintOnSave:false,//关闭eslint检查
  devServer:{
    port:3000,
    open:true//浏览器自动打开
  }
}