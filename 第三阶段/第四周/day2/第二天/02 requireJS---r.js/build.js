// r.js和build.js要放在同一目录下

//压缩文件并保存至新的文件夹内

({
    baseUrl:'.', //主程序入口所在的位置
    appDir:'./',//应用程序的目录，当前目录下的文件都会被压缩。
    dir:'./abc'//压缩文件保存位置
})
// 命令输出
// 全局安装require.js 在cmd中输入npm install require.js -g
// -o == optimazition优化压缩
// 在cmd中输入node r.js -o build.js

