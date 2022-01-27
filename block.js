let $countUps = document.querySelectorAll( '.count-up-digit' );

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight * 0.75 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


document.addEventListener( 'scroll', function(){
    for(let n of $countUps) {
        if( isInViewport(n) ){
            const updateCount = () => {
                const target = + n.getAttribute('data-number');
                const count = + n.innerText;
                const speed = 5000; // change animation speed here
                const inc = target / speed; 
                if(count < target) {
                n.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
                } else {
                n.innerText = target;
                }
            }
            console.log( {
                "innerHeight" : window.innerHeight / 4,
                "el.top" : n.getBoundingClientRect().top
            } );
            updateCount();
        }
    }
} );