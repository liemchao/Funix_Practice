let numNeighbours = prompt("How many neighbor countries does your country have?");

numNeighbours = Number(numNeighbours);
if (numNeighbours && numNeighbours > 0) {
    if (numNeighbours === 1) {
        console.log("Only 1 border!");
    } else {
        console.log('More than 1 border');
    }
} else {
    console.log('No borders');
}
