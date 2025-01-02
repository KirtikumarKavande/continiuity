
const eventEmitter=require('events')
let eventEmit=new eventEmitter()

eventEmit.on('listerName',(name)=>{
    console.log(name)
})

eventEmit.emit('listerName','kirti')