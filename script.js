let CURRENCT_PACKAGE = 1;

let plural_exceptions = [
    "urM",
    "faeiusM"
]

let ignored_punctuation = [
    " ",
    ""
]

let link = 'https://raw.githubusercontent.com/deltah404/qorraxish/master/dictionary.json'
function qorraxish(text, destination) {
    let out = document.getElementById(destination);
    if (text == '') {return out.innerHTML = '-'};
    while (text.endsWith(' ')) {text = text.slice(0, -1)};

    console.log('Loading dictionary from '+link);
    $.getJSON(link, function(data) {
        console.log('Loaded dictionary');
        let dictionary = data;

        function toQorraxish(text, destination) {
            
            let words = text.split(" ");
            let index = 0;
            words.forEach(word => {
                if (ignored_punctuation.includes(word)) {delete words[index]};
                index ++;
            })
            words.forEach(word => {console.log(word)})

            let result = '';
            function analyseWord(word) {
                lword = word.toLowerCase();
                if (Object.keys(dictionary).includes(lword)) {
                    let iter = -1;
                    let found;
                    Object.keys(dictionary).forEach(key => {
                        iter ++;
                        if (key == lword) {found = iter};
                    });
                    console.log(found);
                    result += dictionary[Object.keys(dictionary)[found]] + ' ';
                } else {
                    result += '[' + lword + '] ';
                }
            }
            words.forEach(words => {
                analyseWord(words);
            });
            document.getElementById('dict').innerHTML = result;
        }
        toQorraxish(text, destination);
    });
}

function swap(json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
}

function english(text, destination) {
    let out = document.getElementById(destination);
    if (text == '') {return out.innerHTML = '-'};
    $.getJSON(link, function(data) {
        let dictionary = data;
        let rdictionary = swap(dictionary);
        console.log(dictionary);
        console.log(Object.keys(dictionary));

        function toE(text, destination) {
            
            let words = text.split(" ");

            let result = '';
            function analyseWord(word) {
                if (! plural_exceptions.includes(word)) {lword = word.toLowerCase();} else {lword = word};
                if (Object.keys(rdictionary).includes(lword)) {
                    let iter = -1;
                    let found;
                    Object.keys(rdictionary).forEach(key => {
                        iter ++;
                        if (key == lword) {found = iter};
                    });
                    console.log(found);
                    result += rdictionary[Object.keys(rdictionary)[found]] + ' ';
                } else {
                    result += '[' + lword + '] ';
                }
            }
            words.forEach(words => {
                analyseWord(words);
            });
            document.getElementById('dict').innerHTML = result;
        }
        toE(text, destination);
    });
}

let c = 0;
$.getJSON('https://raw.githubusercontent.com/deltah404/qorraxish/master/dictionary.json', function (data) {
    Object.keys(data).forEach(w => {c++;document.getElementById('count').innerHTML = c+' words - package '+CURRENCT_PACKAGE});
});