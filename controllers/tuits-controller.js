import * as tuitsDao from "../tuits/tuits-dao.js";

// import posts from "./tuits.js";
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    // newTuit.stats = {likes: 0, dislikes: 0};
    newTuit.likes = 0;
    // newTuit['avatar-image'] = "../../images/elon-mush.jpg";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    // tuits.unshift(newTuit); //adding the data at the top of the array
    // tuits.push(newTuit); //adding the data at the end of the array
    res.json(insertedTuit);

}
const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updatedTuit);
    // tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    res.send(status);

}
const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    // tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.send(status);

}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

