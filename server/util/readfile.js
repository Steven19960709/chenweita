const fs = require("fs")
const path = require('path');
// const { getDiffieHellman } = require("crypto");
const ROOT_PATH = '../../web/_posts/'


// async function init () {
//     let result = await readFile('2018-01-20-WebSafe-2.md');
//     console.log('result')
// }

async function readFile(filename) {
    let filePath = path.join(__dirname, ROOT_PATH)
    let dir = fs.readdirSync(filePath)
    let dirMap = {} // 获取目录文章
    dir.forEach((item) => {
        let a = path.join(filePath, item)
        let d = fs.readdirSync(a)
        dirMap[a] = d
    })
    
    for (let prop in dirMap) {
        if (dirMap[prop].includes(filename)) {

            let file = prop + '/' + filename
            // console.log(path.normalize(file))
            let data = await getFile(file)
            // console.log(data)
            return data
        }
    }
}


async function getFile (normalizeFileName) {
    let file = fs.readFileSync(normalizeFileName, 'utf8')
    return file
}

exports.readFile = readFile

