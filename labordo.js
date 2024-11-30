const fs = require('fs');

fs.readFile('filename', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lineCount = data.split('\n').length;
    console.log('Line count:', lineCount);
});
