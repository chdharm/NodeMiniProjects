var fs=require("fs");
var path=require("path");
var dir=path.join(__dirname,'temp')
var source=__filename;
var target=path.join(dir,'target.js');

fs.mkdir(dir,handleError(mkdirped));

function mkdirped(err){
    fs.readFile(source,{encoding:'utf-8'},handleError(haveFile));
}

function haveFile(content){
        fs.writeFile(target,content,handleError(wroteFile));
}
function wroteFile(){
    console.log("Successful done !");
}
function handleError(cb){
    return function(err,result){
        if(err){
            handleError(err);
        }else{
            cb(result);
        }
    }
}

function handleError(e){
    console.log(e)
}