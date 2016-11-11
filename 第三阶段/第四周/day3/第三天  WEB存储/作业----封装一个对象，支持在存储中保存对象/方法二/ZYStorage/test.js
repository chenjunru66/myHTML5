// localStorage.removeItem('test')
console.log(sessionStorage)
console.assert(typeof ZYStorage == 'object', 'ZYStorage不是对象')
console.assert(typeof ZYStorage.session == 'function', 'session方法不存在')
console.assert(typeof ZYStorage.removeSession == 'function', 'removeSession方法不存在')
// 设置sesstionStorage
ZYStorage.session('name', 'ChangWei')
var v = ZYStorage.session('name')
console.assert(v == 'ChangWei', 'session方法保存或获取string值错误')
// 删除
ZYStorage.removeSession('name')
var v = ZYStorage.session('name')
console.assert(v == null, 'removeSession方法删除string值错误')

ZYStorage.session('p', {name: 'ChangWei', age: 3})
var v = ZYStorage.session('p')
// v = { name:'ChangWei', age:3 }
console.assert(v.name == 'ChangWei' && v.age == 3, 'session方法保存或获取对象错误')

ZYStorage.removeSession('p')
var v = ZYStorage.session('p')
console.assert(v == null, 'removeSession方法删除对象错误')



console.assert(typeof ZYStorage.local == 'function', 'local方法不存在')
console.assert(typeof ZYStorage.removeLocal == 'function', 'removeLocal方法不存在')

if(ZYStorage.local('test')){
    var v = ZYStorage.local('test')
    console.assert(v == 'yes', 'local方法在浏览器关闭后未通过测试')
}

ZYStorage.local('name', 'ChangWei')
var v = ZYStorage.local('name')
console.assert(v == 'ChangWei', 'local方法保存或获取string值错误')

ZYStorage.removeLocal('name')
var v = ZYStorage.local('name')
console.assert(v == null, 'removeLocal方法删除string值错误')

ZYStorage.local('p', {name: 'ChangWei', age: 3})
var v = ZYStorage.local('p')
console.assert(v.name == 'ChangWei' && v.age == 3, 'local方法保存或获取对象错误')

ZYStorage.removeLocal('p')
var v = ZYStorage.removeLocal('p')
console.assert(v == null, 'removeLocal方法删除对象错误')



if(!ZYStorage.local('test')){
    console.log('请关闭浏览器并再次打开，以测试local方法')
}
localStorage.setItem('test', JSON.stringify('yes'))
