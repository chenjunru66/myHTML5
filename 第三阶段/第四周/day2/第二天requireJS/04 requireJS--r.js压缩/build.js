//r.js, 当前的配置文件，需要放置根目录下
//压缩文件并保存至新的文件夹内

({
    baseUrl:'.',  // 主程序入口所在位置
    appDir:'./',  //  应用程序的目录，当前目录下的文件都会被压缩
                   // 并复制到新的文件夹中
    dir:'./abc'   //  压缩文件保存位置
})
// 命令输出
// 全局安装require.js  npm install require.js -g
//    -o == optimazition  优化压缩
//  node r.js -o build.js