const secret_text = "23dn3ir30fd2eddd";

function masking(str) {
    const maskedStr = str.substr(0, str.length - 3);

    return `${'*'.repeat(maskedStr.length)}${str.substr(str.length - 3)}`;
}

console.log( masking(secret_text) )