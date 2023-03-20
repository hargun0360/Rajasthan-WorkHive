import ioClient from "socket.io-client"

export const socket = ioClient.connect("http://192.168.137.67:3000/")

socket.emit("join", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5MTE4ODgyNTE3Iiwic3ViIjoiVXNlciIsImV4cCI6MTY3OTYwMTQ3N30.fipVJRuBudDA4m8ukz2vMFc4mhelnqwK7tkHhO-nEA4", 1, 30.7560448, 76.775516053573)

socket.emit("leave", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5MTE4ODgyNTE3Iiwic3ViIjoiVXNlciIsImV4cCI6MTY3OTYwMTQ3N30.fipVJRuBudDA4m8ukz2vMFc4mhelnqwK7tkHhO-nEA4", 1)

socket.on("queue", (data) => {
    console.log(JSON.stringify(data))
})