const fs = require('fs');
const content = 'Hello';
fs.writeFile('exercise3.js', content, err =>{
    if(err) {
        console.error(err);
    }
    //file written successfully
})

