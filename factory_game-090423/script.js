class Player {
    constructor(money) {
        this.money = money;
    }

    buyFactory(nivel, moneyProducedPerMinute) {
        const newFactory = new Factory(nivel, moneyProducedPerMinute);
        if(this.money >= newFactory.cost) {
            this.money = this.money - newFactory.cost;
            newFactory.buildFactory();
            newFactory.produceMoney(this);
            document.getElementById('money').innerHTML = this.money + '$';
        }
    }
}

class Factory {
    constructor(nivel,moneyProducedPerMinute) {
        this.nivel = nivel;
        this.moneyProducedPerMinute = moneyProducedPerMinute;
        this.cost = 400;
    }

    buildFactory() {
        const factoryImage = document.createElement('img');
        const factoryImageRandomize = getRandomInt(3); // getRandomInt(3) -> genereaza un numar de la 0 la 2
        factoryImage.src = 'factory_'+factoryImageRandomize+'.png';
        factoryImage.classList.add('factory-image');
        const factoryDetails = document.createElement('div');
        const factoryLevelWrapper = document.createElement('p');
        const factoryLevel = document.createTextNode('Nivel:' + this.nivel);
        const factoryMPPMWrapper = document.createElement('p');
        const factoryMPPM = document.createTextNode('Money per minute:' + this.moneyProducedPerMinute);
        factoryLevelWrapper.appendChild(factoryLevel);
        factoryMPPMWrapper.appendChild(factoryMPPM);

        factoryDetails.appendChild(factoryLevelWrapper);
        factoryDetails.appendChild(factoryMPPMWrapper);

        const factoryWrapper = document.createElement('div');
        factoryWrapper.classList.add('factory');
        factoryWrapper.appendChild(factoryImage);
        factoryWrapper.appendChild(factoryDetails);

        document.getElementById('factories').appendChild(factoryWrapper);
    }

    produceMoney(player) {
        setInterval(() => {
            console.log('money produced!');
            player.money = player.money + this.moneyProducedPerMinute;
            document.getElementById('money').innerHTML = player.money + '$';
        },60000);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const player = new Player(1000);

const buy = () => player.buyFactory(1, 600);
