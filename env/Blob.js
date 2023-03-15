globalMy.Blob_get_size = function(){
                  if (!(this instanceof Blob)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                var foundName = globalMy.foundName(this);
                result = globalMy.value[foundName]['size'];
                if(globalMy.is_log){console.log('[*]  调用了Blob_get_size,result => ' , result)}
                return result;
                }
globalMy.Blob_get_type = function(){
                  if (!(this instanceof Blob)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                var foundName = globalMy.foundName(this);
                result = globalMy.value[foundName]['type'];
                if(globalMy.is_log){console.log('[*]  调用了Blob_get_type,result => ' , result)}
                return result;
                }
globalMy.Blob_arrayBuffer = function(){
                  if (!(this instanceof Blob)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                //这里写方法实体
                if(globalMy.is_log){console.log('[*]  调用了Blob_arrayBuffer, arguments => ' , JSON.stringify(arguments),  '  result => ' , result)}
                return result;
                }
globalMy.Blob_slice = function(){
                  if (!(this instanceof Blob)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                //这里写方法实体
                if(globalMy.is_log){console.log('[*]  调用了Blob_slice, arguments => ' , JSON.stringify(arguments),  '  result => ' , result)}
                return result;
                }
globalMy.Blob_stream = function(){
                  if (!(this instanceof Blob)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                //这里写方法实体
                if(globalMy.is_log){console.log('[*]  调用了Blob_stream, arguments => ' , JSON.stringify(arguments),  '  result => ' , result)}
                return result;
                }
globalMy.Blob_text = function(){
                  if (!(this instanceof Blob)) {
        throw new TypeError("Illegal invocation");
      }
                let result;
                //这里写方法实体
                if(globalMy.is_log){console.log('[*]  调用了Blob_text, arguments => ' , JSON.stringify(arguments),  '  result => ' , result)}
                return result;
                }