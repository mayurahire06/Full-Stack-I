const products = [
    {
        name: "Laptop",
        price: "$1200"
    },
    {
        name: "Smartphone", 
        price: "$800"
    },
    {
        name: "Tablet", 
        price: "$400"
    },
    {
        name: "Monitor", 
        price: "$200"
    },
    {
        name: "Keyboard", 
        price: "$50"
    }
];


document.addEventListener('DOMContentLoaded', function(){

    const tableBody = document.querySelector('#productTable tbody');

        products.forEach(product=>{
            let row = document.createElement('tr');
            
            let pname = document.createElement('td');
            pname.textContent = product.name;
            
            let pprice = document.createElement('td');
            pprice.textContent = product.price;

            row.appendChild(pname);
            row.appendChild(pprice);
            tableBody.appendChild(row);
        });
    
});
