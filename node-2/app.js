/**
 * Created by Administrator on 2016/11/10.
 */
var fs = require('fs');
fs.readFile('./node-2/readme.txt',function (err,data) {
   if(err){
       console.log('读取文件失败');
   }else
   {
      console.log(data);
      // console.log(data.toString());
   }
});

// fs.writeFile('./node-2/readme.txt',"add for test write",function (err) {
//    if(err)console.log('写文件操作失败');
//     else console.log('写文件操作成功');
// });
fs.open('./node-2/readme.txt','r',function (err,fd) {
   console.log("22222222222");
    console.log(fd);
});

