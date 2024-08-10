
const randomcolor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
  
    for (let i=0;i<6;i++)
    {
      color += hex[parseInt(Math.random()*16)]
    }
    return color
  }
  
  let intervalid;
  
  function changecolor() {
    document.body.style.backgroundColor = randomcolor()
  }
  
  const startchangingcolor = function() {
    intervalid = setInterval(changecolor, 2000)
  
  }
  
  const stopchangingcolor = function() {
    clearInterval(intervalid)
  }
  
  document.querySelector('#start').addEventListener('click', startchangingcolor)
  document.querySelector('#stop').addEventListener('click', stopchangingcolor)