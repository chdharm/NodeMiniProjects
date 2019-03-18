var opeartion =require('./operation')
opeartion({some:'args'},function(err,result){
    if(err){
        console.error(err);
    }else{
        console.log("Successfull  Result:",result)
    }
});