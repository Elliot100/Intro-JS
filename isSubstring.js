const isSubstring = (searchString, subString) => {

    if (searchString.includes(subString)) {
        return true;
    }
    return false;
}

isSubstring('time to program', 'time')