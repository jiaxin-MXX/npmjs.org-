const lodash=require('lodash');
const Shabi=function(arr=[],size=1){
    return lodash.chunk(arr,size)
}
module.exports=Shabi