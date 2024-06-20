import {createServer} from 'node:http';
import {unlink}from 'node:fs';
import {writeFile}from 'node:fs';


// define request handler



// create http server
const server = createServer((req,res) =>{
    console.log(req.url);
    if (req.url.includes('create')){
        //create file
        writeFile('./fifi.html','<h1>Learning Node.js</h1>',()=>{
        
        //return response
        res.writeHead(200, {'Content-Type' :'text/html'});
        res.end ('<h1>File Created</h2>');
    });
    }else{
        //Delete File
        unlink('./hello.html',() => {
            //return response
            res.writeHead(200, {'Content-Type' :'text/html'});
            res.end ('<h1>File Deleted</h2>');
         });
    }
  
});


//Listen for incominf request
server.listen(3000,'127.0.0.1', function() {
    console.log('Server is Running');
});


//Normal Function Vs Arrow Function
// function handleRequest(){} //Normal Function
// const handleRequest = () =>{} //Arrow Function

// function(){}

() => {}//anonymous Arrow Function
