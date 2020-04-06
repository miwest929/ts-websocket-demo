console.log("Setting up WS Server");
import * as ws from 'ws';

// low and high are both inclusive
function randomNumberInRange(min: number, max: number): number {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

const server = new ws.Server({ port: 9998 });
server.on('connection', (c) => {
  c.on('message', (message) => {
    console.log(`received: ${message}`);
  });

  setInterval(() => {
    c.send(randomNumberInRange(1,100));
  }, 1000);
});

/*server.on('open', function open() {
  server.send('something');
});

server.on('message', function incoming(data) {
  console.log(data);
});*/
