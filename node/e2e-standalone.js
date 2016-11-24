// Cross platform shell commands (Hello Windows)
let  sh = require('shelljs');

const   APP_HOST = 'http://localhost',
        APP_PORT = '63999',
        APP_URI = `${APP_HOST}:${APP_PORT}`;

const   BUILD_CMD = 'npm run build',
        SERVE_DIST_CMD = `npm run serve -- -s -p ${APP_PORT}`,
        E2E_CMD = `npm run e2e -- --baseUrl=\'${APP_URI}\'/`;

// Synchronously build the app into dist/
sh.exec(BUILD_CMD);

// Concurrently serve dist/ and mockserver and run protractor
let code = sh.exec(`concurrently -r -k -s first "${SERVE_DIST_CMD}" "${E2E_CMD}"`).code;

sh.exit(code);
