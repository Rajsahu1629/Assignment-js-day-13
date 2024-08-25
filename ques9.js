function buildCreature(type, limbs) {
    return {
        type: type,
        limbs: limbs,
        introduce: function() {
            console.log(`Hello, I am a ${this.type}. I have ${this.limbs} limbs.`);
        }
    };
}

const creature1 = buildCreature('Elephant', 4);
creature1.introduce(); // Output: Hello, I am a Elephant. I have 4 limbs.



// constructor Function 

function Creature(type, limbs) {
    this.type = type;
    this.limbs = limbs;
}

Creature.prototype.introduce = function() {
    console.log(`Hello, I am a ${this.type}. I have ${this.limbs} limbs.`);
};

const creature2 = new Creature('Kangaroo', 2);
creature2.introduce(); // Output: Hello, I am a Kangaroo. I have 2 limbs.


// Es 6 class


class CreatureClass {
    constructor(type, limbs) {
        this.type = type;
        this.limbs = limbs;
    }

    introduce() {
        console.log(`Hello, I am a ${this.type}. I have ${this.limbs} limbs.`);
    }
}

const creature3 = new CreatureClass('Tiger', 4);
creature3.introduce(); // Output: Hello, I am a Tiger. I have 4 limbs.
