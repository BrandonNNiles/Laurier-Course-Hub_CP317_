let datapath = '/courses/317/comments.json'; //location of comments for course

/* drawComments(data)
Draws the comments for a course page
    data: array of JSON objects
*/
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

//Load and parse data
d3.json(datapath).then((data, error) => {
    if(error){console.log(error); return;} 
    drawComments(data.Comments);
})