const Tom = {
    name: 'Tom',
    hp : 1000,
    atk : 10,
    attack: function(target){
        target.hp -= this.atk;
        console.log(`${this.name} attack ${target.name} with ${this.atk} damage, ${target.name} hp is now ${target.hp}`);
    }
}
const Jerry = {
    name: 'Jerry',
    hp : 500,
    atk : 15,
    attack: function(target){
        target.hp -= this.atk;
        console.log(`${this.name} attack ${target.name} with ${this.atk} damage, ${target.name} hp is now ${target.hp}`);
    }
}
Jerry.attack(Tom);
Tom.attack(Jerry);
Jerry.attack(Tom);
Tom.attack(Jerry);
Jerry.attack(Tom);