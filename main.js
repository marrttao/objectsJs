const product = {
name: "Ноутбук",
price: 1200,
category: "Electronics",
stock: 30
};

// aray of properties
function getProperties(obj) {
    return Object.keys(obj);
}

console.log(getProperties(product));
document.getElementById('result').innerHTML = getProperties(product).join(', ');


