#!/usr/bin/env node

let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");
//console.log(inputArr);

let command = inputArr[0];
let types = {
media:["mp4","mkv","jpg"],
archives:['zip','7z','rar','tar','gz','ar','iso','xz'],
documents:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
app:['exe','dmg','pkg','deb']
}
switch(command)
{
	case "tree":
	treeObj.treeKey(inputArr[1]);
	break;
	case "organize":
	organizeObj.organizeKey(inputArr[1])
    break;
    case "help":
    helpObj.helpKey();
    break;
    default:
    console.log("please👏 enter correct command");
    break;
}





