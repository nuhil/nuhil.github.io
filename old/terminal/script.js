const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">resume</span>, <span class="code">clear</span>',
  about:
    "Hello 👋<br>I'm Nuhil, Ph.D. candidate and polyglot programmer with prior graduations in computer science, and former software engineer with more than 5 years of experience who believes in artificial intelligence and likes the cloud, desktop, and mobile platforms for developing software and machine learning based AI tools, following the micro-service architecture to solve real-life problems.",
  skills:
    '<span class="success">Programming - </span>Python, Javascript, Java, C/C++, SQL, R, PHP, HTML, CSS, Shell, Matlab, Swift<br>' +
    '<span class="success">Data Science and Engineering - </span> Web Scrapping, Data Wrangling, Statistical Analysis, Data Visualization, EDA (Exploratory Data Analysis), ETL (Extract Transform Load), SQLite, MySQL, SQL Server, PostgreSQL, MongoDB, SQLAlchemy, Spark, PySpark, Hadoop, Jupyter Notebook, Zeppelin, Microsoft Excel, Tableau, Power BI<br>' + 
    '<span class="success">Machine Learning - </span> Linear Regression, Logistic Regression, Support Vector Machines, Decision Trees, Random Forest, Naive Bayes, K-NN (K-Nearest Neighbors), K-means, Principal Component Analysis, OpenCV, Numpy, pandas, matplotlib, scikit-learn, MLlib<br>' +
    '<span class="success">Deep Learning - </span> CNN (Convolutional Neural Network), LSTM (Long Short Term Memory Network), GAN (Generative Adversarial Network), NLP (Natural Language Processing), Anomaly Detection, Time Series Forecasting, Recommender Systems, Tensorflow, Keras<br>' +
    '<span class="success">Software Development - </span> Django, Flask, PyQt, Tkinter, RESTful Service, Laravel, AngularJS, Node.js, Express, Docker, Vagrant, Nginx, Gunicorn, git, Test Driven Development, Continuous Integration/Deployment, Agile, AWS (Amazon Web Services), GCP (Google Cloud Platform)<br>' +
    '<span class="success">Security Expertise - </span> Information Assurance, Security Goal, Threat Modeling, Vulnerability Analysis, ICS Kill-chain, OWASP (Open Web Application Security Project), Wireshark',
  education:
    "<span class='success'>Ph.D. Candidate - </span>Computing | Boise State University | Jan 2018 – Present | Boise, ID, USA<br>" + 
    "<span class='success'>Master of Science - </span>Computer Science | Lamar University | Aug 2017 | Beaumont, TX, USA<br>" +
    "<span class='success'>Bachelor of Science and Engineering - </span>Computer Science and Engineering | RUET | Bangladesh",
  resume: 
    "Please, follow <a href='https://github.com/nuhil/nuhil.github.io/blob/master/downloads/AKM_Nuhil_Mehdy.pdf' target='_blank' class='success link'>this link</a>",
  experience: 
  '<span class="success">Data Science Intern - </span> Micron Technology, Inc. (May 2020 - Present | Boise, ID, USA)<br>' +
  '<span class="success">Graduate Research Assistant - </span> Boise State University (Jan 2018 - Present | Boise, ID, USA)<br>' +
  '<span class="success">BackEnd Developer (Remote) - </span>Mobbazaar Inc. (Dec 2014 – Aug 2015 | San Jose, CA, USA)<br>' +
  '<span class="success">Software Engineer - </span>Wneeds Ltd. (Feb 2011 – Dec 2014 | Dhaka, BD)',
  contact:
    "You can send me an email by clicking <a href='mailto:nuhil@nuhil.net' class='success link'>here</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  
  if (input == 'clear'){
    terminalOutput.innerHTML = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;    
  } else {
      if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">zsh: command not found: ${input}</div>`;
      } else {
      output += COMMANDS[input];
      }

      terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
