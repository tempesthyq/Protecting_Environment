var percentage
var direction = 0//0：正向 1：反向
var scrollTem = 0//滚动高度

// function getMousePos(event){
//     var e = event || window.event
//     const test = document.querySelector('.TopButton')
//     test.innerHTML = e.clientY


//     return{'x':e.clientX,'y':clientY}
// }

// window.onmousemove = getMousePos

function update(event){
    const earth = document.querySelector('.earth')
    const goodEarth = document.querySelector('.goodEarth')
    const badEarth = document.querySelector('.badEarth')

    goodEarth.style.zIndex = '2'
    badEarth.style.zIndex = '1'

    var e = event || window.event

    // if(direction == 0){
    //     scrollTem =window.scrollY
    // }
    // // 初始化 正向滚动
    // if (window.scrollY === 0) {
    //     direction = 0
    // }
    //   // 反向滚动
    // if (window.scrollY < scrollTem && direction !== 1) {
    //     direction = 1
    // }

    // //根据方向计算百分比
    // if (direction === 1) {
    //     // 反向
    //     percentage = 1 - window.scrollY
    // } else if (direction === 0) {
    //     // 正向
    //     percentage = window.scrollY
    // }
    var radius = e.clientY/20*Math.sqrt(goodEarth.clientWidth*2+goodEarth.clientHeight*2)
    if(direction===0){
        goodEarth.style['clip-path'] = `circle(${radius + 'px'} at 0% 0%)`
    }else if(direction===1){
        goodEarth.style['clip-path'] = `circle(${radius + 'px'} at 0% 0%)`
    }
}

//滚条滚动时触发update
// window.onscroll = update
window.onmousemove = update