globalMy.Worker_get_onmessage = function(){
                  if (!(this instanceof Worker)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                var foundName = globalMy.foundName(this);
                result = globalMy.value[foundName]['onmessage'];
                if(globalMy.is_log){console.log('[*]  调用了Worker_get_onmessage,result => ' , result)}
                return result;
                }
globalMy.Worker_set_onmessage = function(val){
                  if (!(this instanceof Worker)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                var foundName = globalMy.foundName(this);
                globalMy.value[foundName]['onmessage'] = val;
                if(globalMy.is_log){console.log('[*]  调用了Worker_set_onmessage, 传参val => ' + val + '  result => ' , result)}
                }
globalMy.Worker_postMessage = function(){
                  if (!(this instanceof Worker)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                //这里写方法实体
                if(globalMy.is_log){console.log('[*]  调用了Worker_postMessage, arguments => ' , JSON.stringify(arguments),  '  result => ' , result)}
                return result;
                }
globalMy.Worker_terminate = function(){
                  if (!(this instanceof Worker)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                //这里写方法实体
                if(globalMy.is_log){console.log('[*]  调用了Worker_terminate, arguments => ' , JSON.stringify(arguments),  '  result => ' , result)}
                return result;
                }
globalMy.Worker_get_onerror = function(){
                  if (!(this instanceof Worker)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                var foundName = globalMy.foundName(this);
                result = globalMy.value[foundName]['onerror'];
                if(globalMy.is_log){console.log('[*]  调用了Worker_get_onerror,result => ' , result)}
                return result;
                }
globalMy.Worker_set_onerror = function(val){
                  if (!(this instanceof Worker)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                var foundName = globalMy.foundName(this);
                globalMy.value[foundName]['onerror'] = val;
                if(globalMy.is_log){console.log('[*]  调用了Worker_set_onerror, 传参val => ' + val + '  result => ' , result)}
                }
