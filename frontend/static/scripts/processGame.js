$(document).ready(() => {
    $('#1').click(() => {
        processChoice($('#1'));
    });

    $('#0').click(() => {
        processChoice($('#0'));
    });

    $('#2').click(() => {
        processChoice($('#2'));
    });

    $('#3').click(() => {
        processChoice($('#3'));
    });

    $('#4').click(() => {
        processChoice($('#4'));
    });

    $('#5').click(() => {
        processChoice($('#5'));
    });

    $('#6').click(() => {
        processChoice($('#6'));
    });

    $('#7').click(() => {
        processChoice($('#7'));
    });

    $('#8').click(() => {
        processChoice($('#8'));
    });
});

const processChoice = (elem) => {
    let elemId = elem;
    if (currentPlayer != AI) {
        elemId = elem.attr('id');   
    }
    if (!allGrids.includes(elemId)) {
        currentPlayer.grids.push(elemId);
        allGrids.push(elemId);
        console.log(currentPlayer.name, currentPlayer.grids);
        $(`#${elemId} .checkmark`).addClass(currentPlayer.color);
        const result = checkScore(currentPlayer.grids);
        if (result) {
            setTimeout(() => alert(`${currentPlayer.name} won!!!`), 500);
            setTimeout(() => location.reload(), 500);
        }
        else if (currentPlayer === P1) {
            currentPlayer = eval(getValue);
            if (currentPlayer === AI) {
                setTimeout(() => processAI(), 1000);
            }
        }
        else {
            currentPlayer = P1;
        }
    }
    else {
        alert('The box is already checked!');
    }
};

const processAI = () => {
    let choice = String(Math.floor(Math.random() * 9));
    while (allGrids.includes(choice)) {
        choice = String(Math.floor(Math.random() * 9));
    }
    // console.log(choice);
    processChoice(choice);

};