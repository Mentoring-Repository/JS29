var factory_index = 1;

class Player {
    constructor(money) {
        this.money = money;
    }

    buyFactory(nivel, moneyProducedPerMinute) {
        const newFactory = new Factory(nivel, moneyProducedPerMinute);
        if(this.money >= newFactory.cost) {
            this.money = this.money - newFactory.cost;
            newFactory.buildFactory(this);
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

    buildFactory(player) {
        const factory_index_copy = factory_index;
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

        const sellFactory = document.createElement('button');
        const sellFactoryText = document.createTextNode('Sell$');
        sellFactory.classList.add('sell-fabric')
        sellFactory.appendChild(sellFactoryText);


        factoryDetails.appendChild(factoryLevelWrapper);
        factoryDetails.appendChild(factoryMPPMWrapper);

        const factoryWrapper = document.createElement('div');
        factoryWrapper.classList.add('factory');
        factoryWrapper.id = 'factory-'+factory_index;
        sellFactory.addEventListener('click', () => this.sellFactory(player,factory_index_copy))
        factory_index = factory_index + 1;
        factoryWrapper.appendChild(factoryImage);
        factoryWrapper.appendChild(factoryDetails);
        factoryWrapper.appendChild(sellFactory);
        document.getElementById('factories').appendChild(factoryWrapper);
    }

    produceMoney(player,destroy) {
        if(!destroy)
            var money = setInterval(() => {
                console.log('money produced!');
                player.money = player.money + this.moneyProducedPerMinute;
                document.getElementById('money').innerHTML = player.money + '$';
            },1000);
        else clearInterval(money);
    }

    sellFactory(player,index) {
        console.log(index, document.getElementById('factory-'+index))
        document.getElementById('factory-'+index).remove();
        player.money += 400 * 0.8;
        document.getElementById('money').innerHTML = player.money + '$';
        this.produceMoney(player,false);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const player = new Player(1000);

const buy = () => player.buyFactory(1, 600);
