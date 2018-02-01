import requireDir from 'require-dir';

const path = 'tasks';
const options = { recurse: true };

// Scan directory looking for tasks
const tasks = requireDir(path, options);
