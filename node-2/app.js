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

