
//writeFile

const fs = require('fs');
const content = 'Hello';
fs.writeFile('test.html', content, err =>{
    if(err) {
        console.error(err);
    }
    //file written successfully
});

//readFile

fs.readFile('test.html', 'utf8', (err, data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
