const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const binaryMorse = {
        '10':'.',
        '11': '-'
    };

    const morseKeys = Object.keys(MORSE_TABLE);
    const morseValues = Object.values(MORSE_TABLE);

    let resultDotsAndDashes = '';
    let morseLetter;
    let resultString = '';
    let morseArr = [];
    
    const wordsArrInDigits = expr.split('**********');
    
    if (wordsArrInDigits.length > 1) {
        wordsArrInDigits.forEach((wordInDigits, i) => {
            wordInDigits.match(/.{1,10}/g).forEach(letterInDigits => {

                morseLetter = '';

                letterInDigits.match(/.{1,2}/g).forEach(characterInDigits => {    
                    Object.keys(binaryMorse).forEach(key => {

                        if(key === characterInDigits) {
                            morseLetter += binaryMorse[key];
                        }
                    });
                });

                morseArr.push(morseLetter);
                
            });

            if( i + 1 !== wordsArrInDigits.length) {
                morseArr.push(' ');
            }
                
        });
    }

    morseArr.forEach(item => {
        if(item === ' ') {
            resultString += ' ';
        }
        morseKeys.forEach(key => {
            if(key === item) {
                resultString += MORSE_TABLE[key];
            }
        });
    });


    return resultString;
}

module.exports = {
    decode
}