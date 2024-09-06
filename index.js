//import json-server

const jsonServer = require('json-server')

//server

const employeeServer = jsonServer.create()


const router = jsonServer.router('db.json')
 //create middleware

 const middleware = jsonServer.defaults()

 employeeServer.use(middleware)
 employeeServer.use(router)

//port

const PORT = 4000||process.env.PORT

employeeServer.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
    
})