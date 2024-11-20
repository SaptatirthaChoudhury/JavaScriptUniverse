function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    }
    return obj;
}
const salva = new createPerson('Salva');

salva.introduceSelf();