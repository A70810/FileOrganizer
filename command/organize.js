let fs = require("fs");
let path = require("path");

let types = {
media:["mp4","mkv","jpg"],
archives:['zip','7z','rar','tar','gz','ar','iso','xz'],
documents:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
app:['exe','dmg','pkg','deb']
}

function organizefn(dirPath)
{
	let destPath;
	//console.log("Organize command implemented for",dirPath);
	//1. Input-> DirectoryPath Given
	if (dirPath==undefined)
	{
		// console.log("kidly enter the path");
		destPath=process.cwd();
	return;
    }
    else
    {
           let isExisting = fs.existsSync(dirPath);
           if(isExisting)
           {

           	//2. Create-> Organized-Files -> Directory
           	 destPath = path.join(dirPath,"organzied_files");
           	if(fs.existsSync(destPath)==false)
           	{
           		fs.mkdirSync(destPath);
           	}

           }
           else
           {
           	console.log("kidly enter the correct path");
           	return;
           }

    }
            organizedHelper(dirPath,destPath);
    
	
}

function organizedHelper(src, dest)
{
	//3. Identify Categories off all the files present in that input directory ->
	let childName = fs.readdirSync(src);
	//console.log(childName);
	for(let i =0; i<childName.length;i++)
	{
		let childAddress = path.join(src,childName[i]);
		let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile)
        {
        	//console.log(childName[i]); 
        	let category = getCategory(childName[i]);
        	console.log(childName[i],"belongs to ->",category); 
        	//4.copy/cut files to the organized directory inside of any of the category folder
        	sendFiles(childAddress,dest,category)
        }
	}

}

function sendFiles(srcFilePath, dest, category)
{
  let categoryPath = path.join(dest,category);
  if(fs.existsSync(categoryPath)==false)
  {
  	fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFilePath);
  let destfilePath = path.join(categoryPath, fileName);
  fs.copyFileSync(srcFilePath,destfilePath);
  console.log(fileName,"copied to ->",category);
}

function getCategory(name)
{
 let ext = path.extname(name);
 ext = ext.slice(1); 
 //console.log(ext);
 for(let type in types)
 {
 	let cTypeArray = types[type];
 	for(let i =0;i<cTypeArray.length;i++)
 	{
 		if(ext==cTypeArray[i])
 			return type; 
 	}
 }
 return "others";
}

module.exports = {
    organizeKey: organizefn
}