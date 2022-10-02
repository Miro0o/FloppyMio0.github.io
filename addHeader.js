const path = require('path');
const git = require('simple-git')(path.resolve(__dirname, './src'));
const fs=require("fs")
let author,latestAuthor,date, latestDate;
let str = (path.resolve(__dirname, './src')); // 此处只处理src下的相关文件

function getData(str) {
	// 读取文件夹
    fs.readdir(str, (err1, res1) => {
        if(err1) {
            console.log('err1', err1);
        } else {
            console.log('res1', res1);
            res1.forEach((file) => {
                let str2 = str +'/' +file;
                // 判断是是否为文件
                fs.stat(str2, (err2, res2) => {
                    if(err2) {
                        console.log(err2);
                    } else {
                        let flag = res2.isFile();
                        if(flag){
                            console.log(res2);
                            let aa = file.split('.')[1];
                            if(['js','css','less','vue'].includes(aa)){
                            // 读取文件内容
                                fs.readFile(str2, (err3, res3) => {
                                    if(err3){
                                        console.log(err3);
                                    }else {
                                       let ss = res3.toString();
                                       let tt='';
                                       // 获取git相关信息
                                       git .log({file:str2}, (err4, data) => {
                                           if(err4){
                                               console.log(err4);
                                           } else {
                                            //    console.log(data, str2)
                                               if(data.all.length) {
                                                author = data.all.at(-1).author_email ;
                                                date = data.all.at(-1).date;
                                                latestAuthor = data.latest.author_email;
                                                latestDate = data.latest.date;
                                                console.log(author, latestAuthor,date,latestDate);

                                                if(aa === 'vue') {
                                                    tt =
 `
<!--
* @项目名称: xxx
* @FilePath: ${str2.split('工作目录/')[1]}
* @Author: ${author}
* @Date: ${date}
* @LastEditors: ${latestAuthor}
* @LastEditTime: ${latestDate}
* Copyright (c) 2018-2022 xxx）科技股份有限公司 All rights reserved.*注意：本内容仅限于xxx内部传阅，禁止外泄以及用于其他的商业目的

-->

`   
                                                } else {
                                                    tt = 
`
/**
* @项目名称: xxx
* @FilePath: ${str2.split('工作目录/')[1]}
* @Author: ${author}
* @Date: ${date}
* @LastEditors: ${latestAuthor}
* @LastEditTime: ${latestDate}
* Copyright (c) 2018-2022 xxx）科技股份有限公司 All rights reserved.*注意：本内容仅限于xxx内部传阅，禁止外泄以及用于其他的商业目的
*/
                                                    
`                                                    
                                                }
                                                let content = tt + ss;
                                                // 写入文件
                                                fs.writeFile(str2, content, (err5, res5) => {
                                                    if(err5){
                                                      console.log(err5)
                                                    } else {
                                                      console.log(res5)
                                                    }
                                                  })

                                               }
                                               

                                           }
                                       })
                                    }
                                })
                            }

                        } else{
                        	// 若为文件夹递归调用
                            getData(str2);
                        }
                    }
                })
            })
        }
    })
}
getData(str);
