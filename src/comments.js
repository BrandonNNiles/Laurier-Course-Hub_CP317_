//import fs from 'fs';
let datapath = '/courses/317/comments.json';

function drawComments(data){
    let width = 500;
    let height = 500;
    let i = 0;
    let svg = d3.select('#allComments').append('svg')
        .attr('width', width)
        .attr('height', height)
    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text(d => d['Name'] + ': ' + d['content'])
        .attr('x', 50)
        .attr('y', d => i += 1 * 50)

}

/*
function initializeComments(path){

    let obj = {
        comments: new Array()
    }

    const data = JSON.stringify(obj)
    fs.writeFile(path, data, (error) => {
        if(error){
            console.log(error);
        }
    })
}

try {
    let datapath = '/courses/317/comments.json';
    if (fs.existsSync(datapath)){
        console.log("Comments loaded: " + datapath);
    } else {
        console.log('test')
        initializeComments(datapath)
    }
} catch(error){
    console.log(error)
}


function createComment(element){

}
*/

d3.json(datapath).then((data, error) => {
    if(error){console.log(error); return;} 
    drawComments(data.Comments);
})