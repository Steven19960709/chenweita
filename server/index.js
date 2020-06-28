var http = require("http")
var url = require("url")
var fs = require("fs")
var { getFileInfo } = require('./util/getFileInfo')
var { readFile } = require("./util/readfile")

var { sortFile } = require('./util/sortfile')
// var { markdownToHTML } = require('./util/markdown')
http.createServer(async (req, res) => {
    let a = sortFile()
    var pathname = url.parse(req.url).pathname;
    let data = await readFile(pathname.substr(1))
    if (!pathname.includes('favicon')) {
    //   console.log(data.split('---'))
        let d = getFileInfo(data)
        console.log(d)
    }
    // console.log(pathname, 'pathname')
    // let a = await readFile(pathname)
    // console.log(a, 'readfile')

    // console.log(markdownToHTML)
    // markdownToHTML(pathname)
    // pathname = '../web/_posts/ADT' + pathname;
    // var data;
    // async function getdata(){
        // data = readFile(pathname)
    // }
    // if(pathname) getdata();
    // if(data==undefined){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write("hello world")
        res.end()
    // }
        
    // console.log(pathname)
    // fs.readFile(pathname, (err, data) => {
    //     if(err) console.log(err.stack)

    // })
    
    // console.log(data)
    // res.writeHead(200, {'Content-type': 'text/html'});
    // res.write(data.toString())
    // res.end()
}).listen(8000)

