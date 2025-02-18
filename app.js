const fs = require('fs');
// TODO: Require the http module
// const http = require('http')
/*
// TODO: Create a server
const server = http.createServer((req, res)=>{
  // TODO: Create a url object with request url and host name
  const url = new URL(request.url, 'http://${request.headers.host}')

})

  // TODO: Create a switch statement based on pathname of url

      // TODO: Check if request method is GET

        // TODO: Get value of 'name' query

        // TODO: Write response header

        // TODO: Pipe index.html to response


      // TODO: Check if request is POST and if so, run handlePostResponse()

      // TODO: Write response header

      // TODO: Pipe 404.html to response


// TODO: Have server listen at port 4001


// Function for handling POST responses
function handlePostResponse(request, response){
  request.setEncoding('utf8');
  
  // Receive chunks on 'data' event and concatenate to body variable
  let body = '';
  request.on('data', function (chunk) {
    body += chunk;
  });
  
  // When done receiving data, select a random choice for server
  // Compare server choice with player's choice and send an appropriate message back
  request.on('end', function () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];

    const choice = body;

    let message;

    const tied = `Aww, we tied! I also chose ${randomChoice}.`;
    const victory = `Dang it, you won! I chose ${randomChoice}.`;
    const defeat = `Ha! You lost. I chose ${randomChoice}.`;

    if (choice === randomChoice) {
      message = tied;
    } else if (
        (choice === 'rock' && randomChoice === 'paper') ||
        (choice === 'paper' && randomChoice === 'scissors') ||
        (choice === 'scissors' && randomChoice === 'rock')
    ) {
      message = defeat;
    } else {
      message = victory;
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`You selected ${choice}. ${message}`);
  });
}
  */
const http = require('http');

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]

const myServer = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === "/items") handleGetResponse(res)
  else res.write('select a valid endpoint like /items')
  res.end()
})

const handleGetResponse = (res) => {
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(items))
}

myServer.listen(8080, () => {
  console.log("server is running on port..."+ myServer.address().port)
})