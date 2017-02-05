let fs = require('fs');
let path = require('path');

let webConfig = path.join(global.rootDir, 'server', 'config', 'webConfig.json');

exports = module.exports = {
    getIndexInfo: () => {
        return new Promise((resolve, reject)=>{
            let data = fs.readFileSync(webConfig, 'utf-8');
            let jsonData = JSON.parse(data);
            resolve(jsonData);   
        })
    }
}