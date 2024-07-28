var B=BigInt,s=[],u=B(0)
Deno.serve(r=>(!r.url.endsWith("w")&&new Response(`<body><script>d=document
m=Math
c="createElement"
a="appendChild"
s="style"
o=d[c]("div")
i=d[c]("div")
o[s]="height:80vh;overflow:auto"
o[a](i)
d.body[a](o)
B=BigInt
y=14
x=50
i[s]="height:"+y*1000000/x+"px;position:relative"
u=B("${u}")
ws=new WebSocket(d.URL+"w")
;(ws.onmessage=o.onscroll=e=>{e?.data&&(u=B(e.data))
t=m.floor((o.scrollTop/y))
b=m.ceil((o.scrollTop+o.clientHeight)/y)
i.innerHTML="";[...Array(m.ceil(x*(b-t)))].map(
(h,k)=>{
l=t*x+k
r=m.floor(l/x)
k=l%x
h=d[c]("input")
h[s]=\`position:absolute;top:\${r*y}px;left:\${k*14}px\`
k=l
h.type="checkbox"
h.checked=u&(1n<<B(k))
h.onchange=_=>(_.target.checked?u|=(1n<<B(k)):u&=~(1n<<B(k)),ws.send(\`\${u}\`))
i[a](h)})})()</script>`,{headers:{"content-type":"html"}})||(r=Deno.upgradeWebSocket(r),s.push(r.socket),r.socket.onmessage=e=>(s.map(_=>{try{_.send(e.data)}catch{}}),u=B(e.data)),r.response)))