const http=require('http')
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/')
    {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Assignment-1</title></head>')
        res.write('<body><form method="POST" action="/create-user"><input type="text" name="username"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url==='/users')
    {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Assignment-1</title></head>')
        res.write('<body><ul><li>user-1</li><li>user-2</li></ul></body>')
        res.write('</html>')
        return res.end();
    }
    if(url==='/create-user'){
    res.on('data',(chunk)=>{
        const body=[]
        body.push(chunk)
        const parsedBody=Buffer.concat(body).toString();
        console.log(parsedBody.split('=')[1])//username=something...
    })
    res.statusCode=302;
    res.setHeader('Location','/')
    res.end()
}
})
server.listen(3000)