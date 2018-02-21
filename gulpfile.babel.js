import requireDir from 'require-dir';

const path = 'tasks';
const options = { recurse: true };

const tasks = requireDir(path, options);
