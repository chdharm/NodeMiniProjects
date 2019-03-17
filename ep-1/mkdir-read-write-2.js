var fs=require("fs");
var path=require("path");
var dir=path.join(__dirname,'temp')
var source=__filename;
var target=path.join(dir,'target.js');

fs.mkdir(dir,mkdirped);

function mkdirped(err){
    if(err){
        handleError(err);
    }else{
        //Means folder creation is successful
        fs.readFile(source,{encoding:'utf-8'},haveFile);
    }
}

function haveFile(err,content){
    if(err){
        handleError(err);
    }else{
        fs.writeFile(target,content,function(err){
            if(err){
                handleError("The operation is unsuccessful !");
            }else{
                console.log("The operation is successful !");
            }
        });
    }
}

function handleError(e){
    console.log(e)
}