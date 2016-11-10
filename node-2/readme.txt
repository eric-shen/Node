前言
Node中的fs模块实现有关文件及目录的创建，写入及删除操作
2-1 文件执行读写操作
2-1-1
    *****文件的读函数fs.readFile(filename,[option],callback);
        filename:文件的路径和文件名 【必须】
        【option】2个属性
                    flag:指定文件采取什么操作
                    encoding:何种编码方式读取文件
         callback:(err,data)回调函数【必须】

    ******文件的同步读函数:readFileSync(filename,[option]); --参数描述同上

    ******文件的写函数：fs.writeFile(filename,data,[option],callback)------------------------------1
        【option】3个属性
                    flag:
                    mode:(四位数字表示)
                    encoding:
        callback:(err)一个参数
     *****文件的同步写函数:fs.writeFileSync(filename,data,[option]);------------------2
     appendFile(filename,data,[option],callback)类似于writeFile------------------------------------1
     appendFileSync(filename,data,[option]);------------------------------------------2

2-1-2
    指定位置处开始读写文件fs.open(filename,flags,[mode],callback)
    callback(err,fd)fd:打开文件返回的文件描述符
    同步读写文件fs.openSync(filename,flags,[mode])返回被打开的文件描述符

    从文件指定位置读取文件，一直读到文件底部，然后将读取到问内容放到一个缓存区中：fs.read(fd,buffer,offset,length,position,callback)
    callback(err,bytesRead,buffer)
    bytesRead实际读取的字节数，buffer;被读取的缓存区对象
    同步方式打开文件readSync(fd,buffer,offset,length,position)

    从缓存区中读取数据并且从文件的指定处开始写入这些数据:
    fs.write(fd,buffer,offset,length,position,callback)
    callback(err,written,buffer):written代表写入的字节数，被读取的缓存对象
    同步方式写入文件:
    fs.writeSync(fd,buffer,offset,length,position);

    关闭文件
    fs.close(fd,[callback])
    callback(err)
    同步方式关闭fs.closeSync(fd)

    内存缓冲区中的剩余数据全部写入文件
    fs.fsync(fd,[callback])
    同步方式对文件进行同步操作
    fs.fsyncSync(fd)


2-2 创建和读取目录

