import { Haiku } from './../js/haiku.js';

describe('CountSyllables', function() {

  it('should count the vowels in a string', function() {
    var haiku = new Haiku()
    expect(haiku.CountSyllables("person")).toEqual(2);
  });
});
