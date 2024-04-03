export function isEmailValid(email) {
    const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (!email || !emailRegex.test(email)) {
        return 'Incorrect Format';
    }

    const parts = email.split("@");
    if (parts[1].split(".").some(part => part.length > 63)) {
        return 'Incorrect Format';
    }

    return ''; // No error message means the email is valid
}

export function convertToPhone(string) {
    let numbers = '';
    let pointer = 0;
    let output = '';

    while(pointer < string.length){
        const parsed = parseInt(string[pointer]);
        if(parsed || parsed === 0){
            numbers += parsed;
        }
        pointer++;
    }

    if(numbers.length < 10 || numbers.length > 11){
        return {
            isValid: false,
            output: string,
            message: 'Must be 10 or 11 digits'
        };
    }

    pointer = 0;

    if(numbers.length === 10){
        output += '+1 (';
        while(pointer < numbers.length){
            output += numbers[pointer];
            if(pointer === 2){
                output += ') ';
            }
            if(pointer === 5){
                output += '-';
            }
            pointer++;
        }
    }
    else{
        output += '+';
        while(pointer < numbers.length){
            output += numbers[pointer];
            
            if(pointer === 0){
                output += ' ('
            }
            
            if(pointer === 3){
                output += ') ';
            }

            if(pointer === 6){
                output += '-';
            }
            pointer++;
        }
    }
    return {
        isValid: true,
        message: 'Phone is Valid',
        output
    }
};