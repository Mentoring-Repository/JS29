class Image {
    constructor(tag, classes, parentElement, src){
        this.tag = tag;
        this.classes = classes;
        this.parentElement = parentElement;
        this.src = src;
        this.generated_component = '';
    }
    setSRC(){
        this.generated_component.src = this.src;
    }
    generare(){
        const component = document.createElement(this.tag);
        this.parentElement.appendChild(component);
        this.generated_component = component;
        this.attach_classes();
    }
    attach_classes(){
        for(let i=0; i<this.classes.length; i++){
            this.generated_component.classList.add(this.classes[i]);
        }
    }
}
class Menu{
    constructor(img, dishTitle, dishDescription, dishTime, dishPrice){
        this.img = img;
        this.dishTitle = dishTitle;
        this.dishDescription = dishDescription;
        this.dishTime = dishTime;
        this.dishPrice = dishPrice;
    }


    generare(){

        let dishContainer = document.createElement('div');
        dishContainer.classList.add('dish-card');
        let selectElement = document.querySelector('#dish');
        let imageSrc = selectElement.value;
    
        const cardImage =  new Image('img', ['img-seen', 'img-fluid'], dishContainer, imageSrc);
        cardImage.generare();
        cardImage.setSRC();
        let priceClass = '';
        let timeclass ='';
        if (document.querySelector('#price').value >= 50 ){
            priceClass = 'price-class-big';
        }else
        {
            priceClass = 'price-class-small';
        }
        if (document.querySelector('#time').value >= 30 ){
            timeclass = 'time-class-big';
        }else
        {
            timeclass = 'time-class-small';
        }
        dishContainer = this.generateProperty('h1',dishContainer, this.dishTitle, ['title-class'], '', '');
        dishContainer = this.generateProperty('div',dishContainer, this.dishDescription, ['description-class'], '', '');
        dishContainer = this.generateProperty('div',dishContainer, this.dishTime, ['time-class', timeclass], 'Preparation time:', 'minutes');
        dishContainer = this.generateProperty('div',dishContainer, this.dishPrice, ['price-class', priceClass], 'Price:', 'ron');

        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createTextNode('Remove item');
        deleteButton.appendChild(deleteButtonText);
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => dishContainer.remove());
        dishContainer.appendChild(deleteButton);

        document.getElementById('menu').appendChild(dishContainer);
    }

    generateProperty(typeofthing, dishContainer, propertyValue, classtype, property, properytype) {
        const propertyContainer = document.createElement(typeofthing);
        const propertyText = document.createTextNode(property+' ' + propertyValue + ' ' + properytype );
        
        for(let i=0; i<classtype.length; i++){
            propertyContainer.classList.add(classtype[i]);
        }
        propertyContainer.appendChild(propertyText);
        dishContainer.appendChild(propertyContainer);
        return dishContainer;
    }

}

const createMenu = () => {
    const dishTitle = document.getElementById('title').value;
    const dishDescription = document.getElementById('description').value;
    const dishTime = document.getElementById('time').value;
    const dishPrice = document.getElementById('price').value;
    const img = "placeholder";

    const menu = new Menu(img, dishTitle, dishDescription, dishTime, dishPrice);
    menu.generare();
}