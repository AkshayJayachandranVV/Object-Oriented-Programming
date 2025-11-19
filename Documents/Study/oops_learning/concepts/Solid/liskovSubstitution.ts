// The LSP says that if you have a class, you should be able to use any of its subclasses
//  interchangeably without breaking the program.

//Against Liskov
class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
  }

  changeTempo() {
  }

  separateMusicAndVocal() {
  }

  enhanceQualityWithAI() {
  }
}

class LimitedAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  override separateMusicAndVocal() {
    throw Error("You have to buy the premium version to access this feature!");
  }

  override enhanceQualityWithAI(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }
}


//correct
class AudioProcessor1 {
  constructor(protected audioFile: File) {}

  compress() {
  }

  changeTempo() {
  }
}

class PremiumAudioProcessor extends AudioProcessor1 {
  constructor(audioFile: File) {
    super(audioFile);
  }

  separateMusicAndVocal() {
  }

  enhanceQualityWithAI() {
  }
}
