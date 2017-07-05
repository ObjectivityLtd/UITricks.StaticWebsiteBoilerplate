const TASKS_PATH = 'tasks';
const OPTIONS = { recurse: true };

const tasks = require('require-dir')(TASKS_PATH, OPTIONS);
