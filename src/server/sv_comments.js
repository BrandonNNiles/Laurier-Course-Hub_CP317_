import fs from 'fs';

/* initializeComments(path)
Creates a template file at a given path for writting JSON data for comments.
    path: string representation of a filepath
*/
function initializeComments(path){

    let obj = { //setup format for JSON
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
    if (fs.existsSync(datapath)){ //if file exists already
        console.log("Comments loaded: " + datapath);
    } else { //otherwise we create the template
        initializeComments(datapath);
    }
} catch(error){
    console.log(error);
}

/*createComment(name, content)
Appends a new comment to the JSON storage.
Assumes a filepath is valid and is initialized.
    path: string representation of a filepath
    name: string
    content: string
*/
function createComment(path, name, content){
    let jdata;
    fs.readFile(path, (error, data) =>{ //get current comments
        if(error) throw error;
        jdata = JSON.parse(data);
    })
    let date = new Date();
    let comment = {"Name": name, "y": date.getFullYear(), "m": date.getMonth(), "d": date.getDate(), "up": 0, "down": 0, "content": content}
    jdata.Comments.push(comment) //add back to list of comments
    jdata = JSON.stringify(jdata) //return to string

    fs.writeFile(path, jdata, (error) => { //overwrite with old comments + new comment
        if(error){
            console.log("Error writting comment: " + error);
        }
    })
}
