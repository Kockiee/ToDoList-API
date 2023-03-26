const connection = require("./connection")

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks
};

const createTask = async(task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString()

    const query = "INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)"

    const [createTask] = await connection.execute(query, [title, "pendente", dateUTC])

    return {insertId: createTask.insertId};
};

const deleteTask = async(id) => {
    const query = "DELETE FROM tasks WHERE id = ?";
    const removeTask = await connection.execute(query, [id]);
    
    return removeTask;
};

const updateTask = async(id, task) => {

    const {title, status} = task;

    const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
    const [updateTask] = await connection.execute(query, [title, status, id]);
    
    return updateTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}