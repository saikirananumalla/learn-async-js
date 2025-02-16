var aliceTumbling1 = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

var aliceTiming1 = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
};

var alice10 = document.querySelector("#alice1");
var alice20 = document.querySelector("#alice2");
var alice30 = document.querySelector("#alice3");

async function animateSequentially() {
    try {
        if (!alice10 || !alice20 || !alice30) {
            console.warn("#alice elements not found");
            return;
        }

        await alice10.animate(aliceTumbling1, aliceTiming1).finished;
        await alice20.animate(aliceTumbling1, aliceTiming1).finished;
        await alice30.animate(aliceTumbling1, aliceTiming1).finished;
    } catch (err) {
        alert(`Error when animating: ${err.message}`);
    }
}

animateSequentially();
