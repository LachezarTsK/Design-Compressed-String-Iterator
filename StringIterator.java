
public class StringIterator {

    char[] input;
    char letter;
    int index;
    int frequencyLetter;
    final int SPACE_CHAR = ' ';

    public StringIterator(String compressedString) {
        input = compressedString.toCharArray();
    }

    public char next() {
        if (!hasNext()) {
            return SPACE_CHAR;
        }

        if (frequencyLetter == 0) {
            letter = input[index++];
            while (index < input.length && Character.isDigit(input[index])) {
                frequencyLetter = frequencyLetter * 10 + (input[index++] - '0');
            }
        }

        frequencyLetter--;
        return letter;
    }

    public boolean hasNext() {
        return index < input.length || frequencyLetter > 0;
    }
}
