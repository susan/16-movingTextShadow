
  const h2Tag = document.querySelector("h2")
  containerTag=document.querySelector("div")
  const walk = 150; //100px, how much stretched from original

 function changeShadow (e)  {
     //offsetWidth etc is absolute
  const {offsetWidth : width, offsetHeight: height} = containerTag;
    //where is user's cursor
    let {offsetX: x , offsetY: y} = e;
    //if container has child elements, resets when click child so add child width etc.
    if (containerTag !== e.target) {
        x = x + e.target.offsetLeft;
        y= y+ e.target.offsetTop
     }
   
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    let coor = `Coordinates: x: ${x}  y: ${y} width: ${width} height: ${height} xstretch: ${xWalk}  ystretch: ${yWalk}`;
    document.querySelector(".coordinates").innerHTML = coor;

    h2Tag.style.textShadow =`
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${-xWalk}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk}px ${-xWalk}px 0 rgba(0, 255, 0, 0.7),
    ${-yWalk}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
    `;
    
//    if (!h2Tag.classList.contains("active")) {
//     h2Tag.classList.add("active")
//    }
//    else h2Tag.classList.remove("active")
}

containerTag.addEventListener("mousemove", changeShadow)
