
#include<string>
using namespace std;

class StringIterator {
public:

    string input;
    char letter;
    int index;
    int frequencyLetter;
    const char SPACE_CHAR = ' ';

    StringIterator(string compressedString) {
        input = compressedString;
        frequencyLetter = 0;
        index = 0;
    }

    char next() {
        if (!hasNext()) {
            return SPACE_CHAR;
        }

        if (frequencyLetter == 0) {
            letter = input[index++];
            while (index < input.size() && isdigit(input[index])) {
                frequencyLetter = frequencyLetter * 10 + (input[index++] - '0');
            }
        }

        frequencyLetter--;
        return letter;
    }

    bool hasNext() {
        return index < input.size() || frequencyLetter > 0;
    }
};
