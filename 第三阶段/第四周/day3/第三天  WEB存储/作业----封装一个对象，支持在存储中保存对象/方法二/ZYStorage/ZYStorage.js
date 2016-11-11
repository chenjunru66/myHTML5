ZYStorage = {
    session:function(name, value){
        if( name && value ){
            //不管值是否是对象，进行JSON解析
            // JS对象 全部转化为 JSON数据
            value = JSON.stringify(value)
            sessionStorage.setItem(name, value)
            return
        }
        if( name ){
            var data = sessionStorage.getItem(name)
            //  JSON数据全转化JS对象
            data = JSON.parse(data)
            return data
        }
    },
    removeSession:function(name){
        sessionStorage.removeItem(name)
    },
    local:function(name, value){
        if( name && value ){
            value = JSON.stringify(value)
            localStorage.setItem(name, value)
            return
        }

        if(name){
            var data  = localStorage.getItem(name)
            data = JSON.parse(data)
            return data
        }

    },
    removeLocal:function(name){
        localStorage.removeItem(name)
    }
}



