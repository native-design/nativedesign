function errorLogger(msg, loca) {
    throw new Error('Native Design: ' + msg + ' <' + loca + '>');
}

export {
    errorLogger
}
