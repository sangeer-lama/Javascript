function checkVariable(variable) {

    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(undefined);
checkVariable(null);