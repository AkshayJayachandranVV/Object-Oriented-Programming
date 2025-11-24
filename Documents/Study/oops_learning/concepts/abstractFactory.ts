// Abstract Factory = one factory that creates multiple related objects that match a particular theme or family,
// without you knowing the internal creation details.


interface Hero { attack(): void;}
interface Villain { defend(): void;}


interface  ToyFactory {
    createHero(): Hero;
    createVillain(): Villain;
}

class MarvelHero implements Hero {
  attack() { console.log("Iron Man attacks!"); }
}

class MarvelVillain implements Villain {
  defend() { console.log("Thanos defends!"); }
}

class DCHero implements Hero {
  attack() { console.log("Batman attacks!"); }
}

class DCVillain implements Villain {
  defend() { console.log("Joker defends!"); }
}


class MarvelFactory implements ToyFactory {
    createHero(): Hero {
        return new MarvelHero();
    }

    createVillain(): Villain {
        return new MarvelVillain();
    }
}

class DCFactory implements ToyFactory {
    createHero(): Hero {
        return new DCHero();
    }

    createVillain(): Villain {
        return new DCVillain();
    }
}


const factory = new MarvelFactory();
factory.createHero().attack();
factory.createVillain().defend();