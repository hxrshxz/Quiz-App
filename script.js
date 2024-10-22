const questions = [
    {
        question: "What does 'MERN' stand for?",
        choices: ["MongoDB, Express, React, Node", "MySQL, Express, React, Node", "MongoDB, Ember, React, Node", "MongoDB, Express, Ruby, Node"],
        answer: "MongoDB, Express, React, Node"
    },
    {
        question: "Which database is typically used in the MERN stack?",
        choices: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        answer: "MongoDB"
    },
    {
        question: "Which language is primarily used for backend development in the MERN stack?",
        choices: ["Python", "PHP", "JavaScript", "Ruby"],
        answer: "JavaScript"
    },
    {
        question: "What is Express used for in the MERN stack?",
        choices: ["Database management", "Frontend rendering", "Server-side logic", "Styling"],
        answer: "Server-side logic"
    },
    {
        question: "What is React mainly used for?",
        choices: ["Server-side scripting", "Database querying", "Building user interfaces", "Routing"],
        answer: "Building user interfaces"
    },
    {
        question: "Which command is used to create a new React application?",
        choices: ["npx create-react-app", "npm init react-app", "npm start react", "npx react-new-app"],
        answer: "npx create-react-app"
    },
    {
        question: "Which of the following is a NoSQL database?",
        choices: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
        answer: "MongoDB"
    },
    {
        question: "What does JSX stand for in React?",
        choices: ["JavaScript XML", "JavaScript XHR", "JavaScript Execution", "JSON XML"],
        answer: "JavaScript XML"
    },
    {
        question: "Which package is used to handle HTTP requests in Node.js?",
        choices: ["Axios", "Request", "Fetch", "Express"],
        answer: "Express"
    },
    {
        question: "Which of the following is used for routing in React?",
        choices: ["React Router", "Redux", "Next.js", "Mongoose"],
        answer: "React Router"
    },
    {
        question: "What does the `useState` hook in React do?",
        choices: ["Manages component lifecycle", "Manages component state", "Handles HTTP requests", "Performs server-side rendering"],
        answer: "Manages component state"
    },
    {
        question: "In MongoDB, a collection is a:",
        choices: ["Table", "Document", "Row", "Schema"],
        answer: "Table"
    },
    {
        question: "How do you start a Node.js server?",
        choices: ["node server.js", "start server", "npm init server", "npm start node"],
        answer: "node server.js"
    },
    {
        question: "Which of the following is a MongoDB operator used to query for matching values?",
        choices: ["$match", "$query", "$find", "$and"],
        answer: "$match"
    },
    {
        question: "What does `useEffect` in React do?",
        choices: ["Executes code after render", "Handles form submissions", "Manages state updates", "Performs HTTP requests"],
        answer: "Executes code after render"
    },
    {
        question: "Which HTTP method is used to update data in RESTful APIs?",
        choices: ["POST", "PUT", "GET", "DELETE"],
        answer: "PUT"
    },
    {
        question: "Which Node.js framework is typically used with the MERN stack?",
        choices: ["Koa", "Hapi", "Express", "Meteor"],
        answer: "Express"
    },
    {
        question: "What is Mongoose used for in the MERN stack?",
        choices: ["Frontend styling", "Handling HTTP requests", "Object Data Modeling for MongoDB", "Creating REST APIs"],
        answer: "Object Data Modeling for MongoDB"
    },
    {
        question: "Which React hook is used to manage side effects?",
        choices: ["useEffect", "useState", "useReducer", "useContext"],
        answer: "useEffect"
    },
    {
        question: "Which of the following is used for state management in React applications?",
        choices: ["Redux", "Axios", "Express", "Mongoose"],
        answer: "Redux"
    },
    {
        question: "Which of the following is the default port for a Node.js application?",
        choices: ["80", "3000", "8080", "4000"],
        answer: "3000"
    },
    {
        question: "In MongoDB, what is a document?",
        choices: ["A schema definition", "A row in a table", "A single record in a collection", "A database table"],
        answer: "A single record in a collection"
    },
    {
        question: "Which HTTP method is used to create new data in a RESTful API?",
        choices: ["POST", "GET", "PUT", "DELETE"],
        answer: "POST"
    },
    {
        question: "Which of the following is used to build user interfaces in the MERN stack?",
        choices: ["Node.js", "React", "Express", "MongoDB"],
        answer: "React"
    },
    {
        question: "Which of the following hooks is used to manage form inputs in React?",
        choices: ["useState", "useEffect", "useContext", "useRef"],
        answer: "useState"
    },
    {
        question: "Which of the following is NOT a component of the MERN stack?",
        choices: ["Angular", "MongoDB", "Express", "React"],
        answer: "Angular"
    },
    {
        question: "How do you run a Node.js application?",
        choices: ["node app.js", "npm run app", "npm install app", "npx app start"],
        answer: "node app.js"
    },
    {
        question: "What is the primary role of Express in the MERN stack?",
        choices: ["Database management", "Handling HTTP requests and responses", "Building UIs", "Styling web pages"],
        answer: "Handling HTTP requests and responses"
    },
    {
        question: "Which of the following is a middleware function in Express?",
        choices: ["next()", "router()", "res.json()", "req.body()"],
        answer: "next()"
    },
    {
        question: "Which command installs React Router in your React app?",
        choices: ["npm install react-router-dom", "npm install router", "npm init react-router", "npx react-router-init"],
        answer: "npm install react-router-dom"
    },
    {
        question: "Which command is used to start a MongoDB server locally?",
        choices: ["mongod", "mongo-server", "mongodb start", "mongodb-run"],
        answer: "mongod"
    },
    {
        question: "In Node.js, which module is used to work with file systems?",
        choices: ["fs", "http", "path", "os"],
        answer: "fs"
    },
    {
        question: "Which tool can be used to manage package versions in Node.js projects?",
        choices: ["npm", "yarn", "nvm", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the purpose of Babel in a MERN stack project?",
        choices: ["To compile modern JavaScript into backward-compatible versions", "To optimize database queries", "To handle HTTP requests", "To manage CSS files"],
        answer: "To compile modern JavaScript into backward-compatible versions"
    },
    {
        question: "Which method is used to convert a JavaScript object to a JSON string?",
        choices: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "Object.toJSON()"],
        answer: "JSON.stringify()"
    },
    {
        question: "Which of the following is used to deploy a MERN app?",
        choices: ["Heroku", "Vercel", "AWS", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which method is used to delete a document in MongoDB?",
        choices: ["delete()", "remove()", "deleteOne()", "drop()"],
        answer: "deleteOne()"
    },
    {
        question: "Which of the following is true about `npm start` in a React project?",
        choices: ["It starts the development server", "It installs dependencies", "It builds the project for production", "It runs tests"],
        answer: "It starts the development server"
    },
    {
        question: "Which command initializes a new Node.js project?",
        choices: ["npm init", "npm install", "node start", "npm create"],
        answer: "npm init"
    },
    {
        question: "Which of the following is a valid way to import a component in React?",
        choices: ["import Component from './Component'", "import { Component } from './Component'", "import component()", "import './Component'"],
        answer: "import Component from './Component'"
    },
    {
        question: "In which format does MongoDB store data?",
        choices: ["SQL", "JSON", "BSON", "XML"],
        answer: "BSON"
    },
]


const buttonELements = document.querySelectorAll("button");
const startButton = document.getElementById('start-button')
const nextButton = document.querySelector('.next-button')
const startButtonContainer = document.getElementById('start-button-container')
const isHidden = document.querySelectorAll('.hide')
const question = document.getElementById('question')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const body = document.getElementById('body');





startButton.addEventListener('click', () => {
    question.hidden = false;
    isHidden.forEach(e => {
        e.classList.remove('hide');
    })
    startButtonContainer.style.display = 'none';
    questionGenerator();
})

nextButton.addEventListener('click', () => {
    buttonELements.forEach(e => {
        e.style.backgroundColor = 'white';
    })
    questionGenerator();
})

const questionGenerator = () => {

    const generatedIndex = Math.floor(Math.random() * questions.length)
    question.innerText = questions[generatedIndex].question;
    option1.innerText = questions[generatedIndex].choices[0];
    option2.innerText = questions[generatedIndex].choices[1];
    option3.innerText = questions[generatedIndex].choices[2];
    option4.innerText = questions[generatedIndex].choices[3];

    var ansIndex = 0;
    for (let i = 0; i <= 3; i++) {
        if (questions[generatedIndex].choices[i] === questions[generatedIndex].answer) {
            ansIndex = i;
        }
        buttonELements[i].addEventListener('click', () => {
            if (i === ansIndex) {
                buttonELements[i].style.backgroundColor = 'green';
            } else {
                buttonELements[i].style.backgroundColor = 'red';
            }
        })
    }
}







