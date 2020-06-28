var fs = require("fs")
function readFile(val){ 
    //一定要注意路径问题
    let path = '../web/_posts/' 
    fs.readdir(path, (err ,dir) => {
        if(err) console.log(err.stack)
        dir.forEach((value) => {
            let a = path + value
            fs.readdir(a,(err,files) => {
                if(err) console.log(err.stack)
                let str = val.substr(1);
                console.log(str)
                if(files.includes(str)){
                    let res = a + val;
                    var data = fs.readFileSync(res)
                    // console.log(data.toString())
                    return data.toString()
                } 
            })
        })
    })
}
exports.readFile = readFile;
