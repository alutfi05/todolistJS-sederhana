/**
 * STUDY CASE
 *
 *
 * Buatlah sebuah aplikasi todo sederhana yang memungkinkan user dapat melakukan penambahan, penyelesaian, pengurangan, dari sebuah board todo list. USer juga dapat melihat list mana yang belum selesai. CRUD : Create Read Update Delete
 *
 * Proses:
 *
 * let todos = [
 *      {
 *          id: 1,
 *          task: "Belajar Object",
 *          status: true
 *      },
 *      {
 *          id: 2,
 *          task: "Kerjakan tugas",
 *          status: false
 *      }
 * ]
 *
 * TASKS:
 *
 * 1. Buat function untuk menampilkan list todos.
 *
 * function showTodos()
 *
 * Result"
 *
 * 1. [X] Belajar Object
 * 2. [ ] Kerjakan Tugas
 *
 * 2. Buat function untuk menambahkan todo, asumsikan ketika menambahkan status false.
 *
 * function addTodo(task)
 *
 * 3. Buat function untuk menghapus sebuah todo, parameter function berupa id
 *
 * function deleteTodo(id) => jika id 3 maka task dgn id 3 terhapus
 *
 * 4. Buat function untuk meng edit sebuah todo, parameter ada 2, id dan task
 *
 *  function updateTodo(id, task) => id menunjukkan task mana yg di edit, task mengganti nama task nya
 *
 * 5. Buat function untuk menyelesaikan todo dan sebaliknya
 *
 * function changeStatus(id) => jika id 3 maka task dgn id 3 di buat jd status sebaliknya
 */

let todos = [
    {
        id: 1,
        task: "Belajar Object",
        status: true,
    },
    {
        id: 2,
        task: "Kerjakan tugas",
        status: false,
    },
];

const showTodos = () => {
    todos.forEach((todo) => {
        todo.status === true
            ? console.log(`${todo.id}. [X] ${todo.task}`)
            : console.log(`${todo.id}. [ ] ${todo.task}`);
    });
};

const addTodo = (task) => {
    let temp = {};

    const lastIndex = todos.length - 1;
    const id = todos[lastIndex].id + 1;
    const status = false;

    temp = {
        id,
        task,
        status,
    };

    todos.push(temp);
};

const updateTodo = (id, task) => {
    todos.forEach((todo) => {
        if (todo.id === id) {
            todo.task = task;
            console.log(`Task with id '${todo.id}' success updated`);
        }
    });
};

const deleteTodo = (id) => {
    let result = [];
    todos.forEach((todo) => {
        if (todo.id !== id) {
            result.push(todo);
        }
    });

    todos.length === result.length
        ? console.log(`${id} not found`)
        : console.log(`${id} has been deleted`);

    todos = result;
};

const changeStatusTodo = (id) => {
    todos.forEach((todo) => {
        if (todo.id === id) {
            todo.status = !todo.status;
        }
    });
};

// Test Case
addTodo("Belajar");
addTodo("Latihan");
addTodo("Typo");
showTodos();
console.log("\n");
updateTodo(5, "Coba JS");
showTodos();
console.log("\n");
deleteTodo(3);
showTodos();
console.log("\n");
changeStatusTodo(5);
changeStatusTodo(2);
changeStatusTodo(4);
showTodos();
