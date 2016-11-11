/**
 * @file 这个文件定义了一个Point类
 * @author 范珍珍 <fanzhenzhen@zhiyou100.com>
 * @copyright 智游教育 2016
 * @version 1.0.0
 */

/**
 * @class Point
 * @classdesc 封装了一系列关于点的操作
 * 创建一个点
 * @constructor
 * @param {Number} x  -x轴坐标
 * @param {Number} y  -y轴坐标
 */
function Point(x,y){
    this.x = x 
    this.y = y
}

/**
 * 计算两点间的距离
 * @param {Point} p  -另一个点
 * @returns {Number} 
 */
Point.prototype.distance = function(p){
    return Math.sqrt((this.x-p.x)*(this.x-p.x)+(this.y-p.y)*(this.y-p.y))
}
