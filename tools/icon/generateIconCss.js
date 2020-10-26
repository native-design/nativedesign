const fs = require('fs'),
    path = require('path');

const regularCodepointArr = fs.readFileSync(path.join(__dirname, './regular.txt')).toString().split('\n');

let cssText = '';

for (let i = 0; i < regularCodepointArr.length; i++) {
    let currCodepointArr = regularCodepointArr[i].trim().split(' ');

    if (!currCodepointArr[0] || !currCodepointArr[1]) {
        continue;
    }

    cssText += `.nd-icon.nd-icon-${ currCodepointArr[0].replace(/_/g, '-') }::before {
    content: '\\${ currCodepointArr[1] }';
}\n\n`
}

fs.writeFileSync(path.join(__dirname, './regular.css'), cssText);
