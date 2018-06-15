const dnaRnaMap = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

class DnaTranscriber {
  toRna(sequence) {
    let result = "";

    for (let i = 0; i < sequence.length; i++) {
      const mappedNucleotide = dnaRnaMap[sequence[i]];

      if (!mappedNucleotide) {
        throw new Error(`Invalid input`);
      }

      result += dnaRnaMap[sequence[i]];
    }

    return result;
  }
}

module.exports = DnaTranscriber;
