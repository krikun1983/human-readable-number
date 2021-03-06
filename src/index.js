module.exports = function toReadable(number) {
    const getString = (number) => {
        switch (number) {
            case 0: return "zero";
            case 1: return "one";
            case 2: return 'two';
            case 3: return "three";
            case 4: return 'four';
            case 5: return "five";
            case 6: return 'six';
            case 7: return "seven";
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return "ten";
            case 11: return "eleven";
            case 12: return 'twelve';
            case 13: return "thirteen";
            case 14: return 'fourteen';
            case 15: return "fifteen";
            case 16: return 'sixteen';
            case 17: return "seventeen";
            case 18: return 'eighteen';
            case 19: return 'nineteen';
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'forty';
            case 50: return 'fifty';
            case 60: return 'sixty';
            case 70: return 'seventy';
            case 80: return 'eighty';
            case 90: return 'ninety';
            case 100: return 'hundred';
        }
    }
    if (number >= 0 && number <= 20) {
        return getString(number);
    } else if (number > 20 && number < 100) {
        let division;
        if (number % 10 == 0) {
            return getString(number);
        } else {
            division = number % 10;
            return `${getString(number - division)} ${getString(division)}`;
        }
    } else if (number >= 100 && number <= 999) {
        let hundred = number / 100;
        if (number % 100 == 0) {
            return `${getString(number / 100)} hundred`;
        }
        let tens;
        if ((number % 100) < 21) {
            tens = (number % 100);
            return `${getString(Math.floor(hundred))} hundred ${getString(tens)}`;
        } else {
            tens = (number % 100) - (number % 10);
        }
        let division;
        if (number % 10 !== 0) {
            division = (number % 10);
        } else {
            return `${getString(Math.floor(hundred))} hundred ${getString(tens)}`;
        }
        return `${getString(Math.floor(hundred))} hundred ${getString(tens)} ${getString(division)}`;
    }
}
