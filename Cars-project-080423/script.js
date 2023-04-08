var count_cars = 0;
class Car {
    constructor
        (
        VIN,
        marca,
        model,
        an_fabricatie,
        km,
        combustibil,
        putere,
        norma_poluare,
        numar_portiere,
        culoare,
        cutie_viteze
        )
    {
        this.VIN = VIN;
        this.marca = marca;
        this.model = model;
        this.an_fabricatie = an_fabricatie;
        this.km = km;
        this.combustibil = combustibil;
        this.putere = putere;
        this.norma_poluare = norma_poluare;
        this.numar_portiere = numar_portiere;
        this.culoare = culoare;
        this.cutie_viteze = cutie_viteze;
        this.generated_element = '';
    }

    generare() {
        let carContainer = document.createElement('div');
        carContainer.classList.add('car-card');

        carContainer = this.generateProperty(carContainer, this.VIN, 'VIN:');
        carContainer = this.generateProperty(carContainer, this.marca, 'Marca:');
        carContainer = this.generateProperty(carContainer, this.model, 'Model:');
        carContainer = this.generateProperty(carContainer, this.an_fabricatie, 'An fabricatie:');
        carContainer = this.generateProperty(carContainer, this.km, 'KM:');
        carContainer = this.generateProperty(carContainer, this.combustibil,'Combustibil:');
        carContainer = this.generateProperty(carContainer, this.putere, 'Putere:');
        carContainer = this.generateProperty(carContainer, this.norma_poluare, 'Norma poluare:');
        carContainer = this.generateProperty(carContainer, this.numar_portiere, 'Numar portiere:');
        carContainer = this.generateProperty(carContainer, this.culoare, 'Culoare:');
        carContainer = this.generateProperty(carContainer, this.cutie_viteze, 'Cutie de viteze:');

        const buttonsWrapper = document.createElement('div');

        const editButton = document.createElement('button');
        const editButtonText = document.createTextNode('Edit');
        editButton.appendChild(editButtonText);
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => this.toggleEdit());
        buttonsWrapper.appendChild(editButton);

        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createTextNode('X');
        deleteButton.appendChild(deleteButtonText);
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => carContainer.remove());
        buttonsWrapper.appendChild(deleteButton);



        carContainer.appendChild(buttonsWrapper);
        count_cars++;
        carContainer.id = 'car-'+count_cars;
        this.generated_element = carContainer;

        document.getElementById('cars').appendChild(carContainer);
    }

    generateProperty(carContainer, propertyValue, property) {
        const propertyContainer = document.createElement('div');
        const propertyText = document.createTextNode(property+' ');
        const propertyInput = document.createElement('input');
        propertyInput.disabled = true;
        propertyInput.value = propertyValue;
        propertyContainer.appendChild(propertyText);
        propertyContainer.appendChild(propertyInput);
        carContainer.appendChild(propertyContainer);
        return carContainer;
    }

    toggleEdit() {
        if(document.querySelector('#'+this.generated_element.id+' .edit-button').textContent == 'Edit') {
            document.querySelectorAll('#'+this.generated_element.id+' input').forEach((input) => {
                input.disabled = false;
            })
            document.querySelector('#'+this.generated_element.id+' .edit-button').textContent = 'Complete';
        } else {
            document.querySelectorAll('#'+this.generated_element.id+' input').forEach((input) => {
                input.disabled = true;
            })
            document.querySelector('#'+this.generated_element.id+' .edit-button').textContent = 'Edit';
        }

    }
}

const createCar = () => {
    const VIN = document.getElementById('VIN').value;
    const marca = document.getElementById('marca').value;
    const model = document.getElementById('model').value;
    const an_fabricatie = document.getElementById('anFabricatie').value;
    const km = document.getElementById('km').value;
    const combustibil = document.getElementById('combustibil').value;
    const putere = document.getElementById('putere').value;
    const norma_poluare = document.getElementById('normaPoluare').value;
    const numar_portiere = document.getElementById('numarPortiere').value;
    const culoare = document.getElementById('culoare').value;
    const cutie_viteze = document.getElementById('cutieViteze').value;

    const car = new Car(VIN,marca,model,an_fabricatie,km,combustibil,putere,norma_poluare,numar_portiere,culoare,cutie_viteze);
    car.generare();
}