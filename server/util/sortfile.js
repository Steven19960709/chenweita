var fs = require("fs")
function sortFile() {
    let path = '../web/_posts/';
    let newarr = [];
    //获取最新的arr
    let arrlen = []
    //获取最新的每个文件夹文件个数，用来标记tag深浅
    let totalarr = [];
    //获取所有的目录
    fs.readdir(path, (err, dir) => {
        if (err) console.log(err.stack)
        dir.forEach((value1) => {
            // console.log(value1)
            totalarr.push(value1);
            let filepath = path + value1;
            fs.readdir(filepath, (err, file) => {
                let len = file.length;
                arrlen.push(len)
                for(let i = len-1; i >= 0;i--){
                    if(file[i].substr(0,4) == '2018') newarr.push(file[i])
                    else break;
                }
                // console.log(newarr)
                // file.forEach((value2) => {
                //     arr.push(value2)
                // })
            })
        })
    })
    newarr.sort((a, b) => {
        return a-b;
    })
    // console.log(newarr)
    //异步问题，还未获取到arr
}
exports.sortFile = sortFile;