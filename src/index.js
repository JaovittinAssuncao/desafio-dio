class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    atacar() {
        let ataque;
        switch (this.type) {
          case 'mago':
            ataque = 'usou magia';
            break;
          case 'guerreiro':
            ataque = 'usou espada';
            break;
          case 'monge':
            ataque = 'usou artes marciais';
            break;
          case 'ninja':
            ataque = 'usou shuriken';
            break;
          default:
            ataque = 'fez um ataque desconhecido';
            break;
        }
        console.log(`O ${this.type} atacou usando ${ataque}`);
      }
}
    
    let player = new Hero("Jaovittin", 28 , "guerreiro")
    player.atacar()


    