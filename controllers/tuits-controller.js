import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.stats = {likes: 0, dislikes: 0};
    newTuit['avatar-image'] = "../../images/elon_musk.jpg";
    tuits.unshift(newTuit); //adding the data at the top of the array
    // tuits.push(newTuit); //adding the data at the end of the array
    res.json(newTuit);

}
const findAllTuits = (req, res) => {
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);

}
const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);

}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

