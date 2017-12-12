
function READ (line) {
    return line;
}

function EVAL (expression) {
    return expression;
}

function PRINT(result)  {
    return result;
}

function rep (input) {
    let ret = READ(input);
    ret = EVAL(ret);
    ret = PRINT(ret);
    return ret;
}

function main () {
    const EOF = 4;
    
    process.stdin.setEncoding('utf8');
    process.stdout.write('> ');
    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        const string = String(chunk);

        // exit 
        if (string.charCodeAt(0) === EOF) {
            process.exit();
        }

        // process
        if (chunk !== null) {
            const res = rep(string);
            process.stdout.write(res);
            process.stdout.write('> ');
        }     
    });
    
    process.stdin.on('end', () => {
        process.stdout.write('end');
    });
}

// run main
main();