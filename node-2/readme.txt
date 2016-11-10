前言
Node中的fs模块实现有关文件及目录的创建，写入及删除操作
2-1 文件执行读写操作
2-1-1 文件的读函数fs.readFile(filename,[option],callback);
        filename:文件的路径和文件名 【必须】
        【option】2个属性
                    flag:指定文件采取什么操作
                    encoding:何种编码方式读取文件
         callback:(err,data)回调函数【必须】

      文件的同步读函数:readFileSync(filename,[option]); --参数描述同上

