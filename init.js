// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

fs.copyFileSync('.env.sample', '.env');
fs.mkdirSync('tmp/pgdata', { recursive: true });
