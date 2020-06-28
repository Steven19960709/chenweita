// const markdown = require("markdown").markdown;
// const fs = require("fs")
// const http = require("http")
// http.createServer(function(req, res) {
//     fs.readFile('./test.md', 'utf-8', function(err, data) {
//         if (err) {
//             console.log(err.stack)
//         } else {
//             res.writeHead(200, {'Content-type': 'text/html'})
//             // console.log(data);
//             var ans = markdown.toHTML(data);
//             console.log(ans)
//             res.write('<head><meta charset="utf-8"/></head>')
//             res.write(ans.toString(), 'utf-8');
//             res.end()
//         }
//     })
// }).listen(3000)

var fs = require("fs");
var markdown = require("markdown").markdown;
function markdownToHTML(data){
        if(err) console.log(err.stack)
        let ans = markdown.toHTML(data).toString();
        ans += '<head><meta charset="utf-8"/></head>';
        console.log(ans)
}
exports.markdownToHTML = markdownToHTML;