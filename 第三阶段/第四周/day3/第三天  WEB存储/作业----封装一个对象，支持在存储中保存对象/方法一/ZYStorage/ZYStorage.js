ZYStorage = {
    session:function(name, value){
        //console.log(name + ',' + value)
        // 设置sessionStorage
        if( name && value ){
            //判断value是对象(多个键值对)或字符串
            if( typeof value == 'object'){
                value = JSON.stringify(value)
                sessionStorage.setItem(name, value)
            } else {
                sessionStorage.setItem(name, value)
            }
            return
        }
        // 读取
        if( name ){
            var data = sessionStorage.getItem(name)
            //console.log(data)
            // 不管是否是对象形式的字符串，直接尝试解析
            try{
                data = JSON.parse(data)
            } catch (err){
                //console.log('不是JSON')
            }

            return data
        }

    },
    removeSession:function(name){
        sessionStorage.removeItem(name)
    },
    local:function(name, value){
        if( name && value ){
            if( typeof value == 'object'){
                value = JSON.stringify(value)
            }
            localStorage.setItem(name, value)
            return
        }

        if(name){
            var data  = localStorage.getItem(name)
            try{
                data = JSON.parse(data)
            } catch (err){
                //console.log('不是JSON')
            }
            return data
        }

    },
    removeLocal:function(name){
        localStorage.removeItem(name)
    }
}



