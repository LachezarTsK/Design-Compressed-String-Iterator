
/**
 * @param {string} compressedString
 */
var StringIterator = function (compressedString) {
    this.input = compressedString.split('');
    this.index = 0;
    this.frequencyLetter = 0;
    this.letter = ' ';
    this.SPACE_CHAR = ' ';
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function () {

    if (!this.hasNext()) {
        return this.SPACE_CHAR;
    }

    if (this.frequencyLetter === 0) {
        this.letter = this.input[this.index++];
        while (this.index < this.input.length && !isNaN(this.input[this.index])) {
            this.frequencyLetter = this.frequencyLetter * 10 + (this.input[this.index++] - '0');
        }
    }

    this.frequencyLetter--;
    return this.letter;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {
    return this.index < this.input.length || this.frequencyLetter > 0;
};
