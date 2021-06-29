function logTwoValues(value1,value2) {
    console.log(`The two vaules are ${value1} and ${value2}.`);
}

function introduction(name){
    return `Hi, my name is ${name}.`;
}
introduction('name');

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
return `Hi, my name is ${Gracie} and I am learning to program in ${JavaScript}.`;
}
function introductionWithLanguageOptional(name, language ="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
 return `Hi, my name is ${Gracie} and I am learning to program in ${Python}. `;
}