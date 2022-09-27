let fs = require('fs');
let path = require('path');
function treefn(dirPath)
{
	//console.log("Tree command implemented for",dirPath);
	//let destPath;
	//console.log("Organize command implemented for",dirPath);
	//1. Input-> DirectoryPath Given
	if (dirPath==undefined)
	{
		treeHelper(process.cwd(),"")
	return;
    }
    else
    {
           let isExisting = fs.existsSync(dirPath);
           if(isExisting)
           {
               treeHelper(dirPath,"");
           }
           else
           {
           	console.log("kidly enter the correct path");
           	return;
           }

    }
}

function treeHelper(dirPath,indent)
{
   //is file or folder
   let isFile = fs.lstatSync(dirPath).isFile();
   if(isFile==true)
   {
   let fileName = 	path.basename(dirPath);
   console.log(indent + "|---" + fileName);
   }
   else
   {
   	let dirName = path.basename(dirPath);
    console.log(indent + "|___"+ dirName);
    let childrens = fs.readdirSync(dirPath)
    for(let  i=0;i<childrens.length;i++)
    {
       let childPath = path.join(dirPath,childrens[i])
       treeHelper(childPath, indent+"\t");
    }
   }
}

module.exports = {

treeKey:treefn

}