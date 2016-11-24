/**
 * This is an example node hook which will add tags to the commit message
 * - If branch name is feature/branch, bug/branch or tests/branch it will add: [branch]
 * - If branch name is feature/CR-111, bug/CR-111 it will add: [DEV][CR-111]
 * - If branch name is tests/CR-111 it will add: [QA][CR-111]
 * - If branch name is feature/CR-111-something-else it will add: [DEV][CR-111]
 */

// Cross platform shell commands (Hello Windows)
let sh = require('shelljs');
let fs = require('fs');

const   BRANCHES_TO_SKIP = ['master', 'develop', 'test'],
        BRANCH_NAME = sh.exec('git symbolic-ref --short HEAD').stdout;

const   FEATURE_REGEX = /^feature\//,
        TESTS_REGEX = /^tests\//,
        BUG_REGEX = /^bug\//;

function replaceFirstLineInFile(contents, regex, replacement) {
    let lines = contents.split(/\r*\n/);
    if (lines.length) {
        lines[0] = lines[0].replace(regex, replacement);
    }
    return lines;
}

function checkIfTagsAreAlreadySet(contents) {
    let regex = /(?:\[DEV\])|(?:\[QA\])|(?:\[CR-\d+\])/;
    return regex.test(contents);
}

if (BRANCHES_TO_SKIP.indexOf(BRANCH_NAME) === -1) {
    let $1 = sh.env.GIT_PARAMS.split(' ')[0];
    let contents = fs.readFileSync($1, 'utf8');

    if (checkIfTagsAreAlreadySet(contents)) return;

    let matches = BRANCH_NAME.match(/^[^\/]+\/((?:CR-[\d]+)|(?:.+))/);
    if (matches) {
        let replacement = matches[1];
        let lines;

        switch (true) {
            case FEATURE_REGEX.test(BRANCH_NAME):
                lines = replaceFirstLineInFile(contents, /^/, `[DEV][${replacement}] `);
                break;
            case TESTS_REGEX.test(BRANCH_NAME):
                lines = replaceFirstLineInFile(contents, /^/, `[QA][${replacement}] `);
                break;
            case BUG_REGEX.test(BRANCH_NAME):
                lines = replaceFirstLineInFile(contents, /^/, `[DEV][${replacement}] `);
                break;
        }

        if (lines) {
            fs.writeFileSync($1, lines.join('\n'), 'utf8');
        }
    }
}
