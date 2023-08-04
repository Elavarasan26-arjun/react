window.addEventListener('load',function(){
    const canvas=document.getElementById('canvs')
    const ctx=canvas.getContext('2d')
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight

    
    class particle{
constructor(effect){
    this.effect=effect
    this.x=Math.random() * this.effect.width
    this.y=Math.random() * this.effect.height
    this.size=10
    this.vx=Math.random()*2 - 1
    this.vy=Math.random()*2 - 1
}
draw(context){
    context.fillRect(this.x, this.y, this.size, this.size)
}
update(){
     this.x += this.vx
     this.y += this.vy
     }
}
    class Effect{
        constructor(width,height){
            this.width=width
            this.height=height
            this.particlesarray=[]
            this. image=document.getElementById('image')
            this.centerx=this.width*0.5
            this.centery=this.height*0.5
            this.x=this.centerx-this.image.width*0.5
            this.y=this.centery-this.image.height*0.5
            this.gap=5
        }
        init(context){
            context.drawImage(this.image,this.x,this.y)
           const pixels=context.getImageDate(0,0,this.width,this.height).data
           for(let y = 0;y < this.height;y += this.gap){
            for(let x = 0;x < this.width;x += this.gap){
                const html=(y * this.width + x)*4
            }
           }
        }
        draw(context){
            this.particlesarray.forEach(particle => particle.draw(context))
           
        }
        update(){
            
            this.particlesarray.forEach(particle => particle.update())
        }

    }
    const effect=new Effect(canvas.width,canvas.height)
    effect.init(ctx)
    
    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        effect.draw(ctx)
        effect.update()
        requestAnimationFrame(animate)
    }
    //animate()
})