export class Haiku {
constructor () {

}

CountSyllables(input) {
 let vowels = input.replace(/[^aeiouyAEIOUY]/g,"").length;
 return vowels;
}
};
