// There should never be more than one reason for a class to change. Every class should have only one responsibility.

class Settings {
  constructor(
    protected theme: "LIGHT" | "DARK",
    protected preferredLanguage: string
  ) {}


  public toggleTheme(){
    if(this.theme == "LIGHT"){
        this.theme = "LIGHT"
    }else {
        this.theme = "DARK"
    }
  }

  updateLanguage(language : string){
    this.preferredLanguage = language
  }

}


class Profile {
  constructor(
    protected email: string,
    protected bio: string,
    protected settings: Settings,
  ) {}

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public getProfile() {
    return { email: this.email, bio: this.bio };
  }
}

