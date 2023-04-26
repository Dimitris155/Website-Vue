
<script setup>
    import {onMounted, ref} from 'vue'

    const products = ref([])
    const checkedProducts = ref([]);

    async function getProducts() {
        const res = await fetch('/data/products.json')
        const data = await res.json();
        const deletedProducts = JSON.parse(sessionStorage.getItem('deletedProducts')) || [];
        products.value = data.filter((product) => !deletedProducts.some((deletedProduct) => deletedProduct.code === product.code));
    }

    onMounted(() => {
        getProducts()
    })

    //mark the whole line of a product when checked
    function toggleCheck(code) {
        if (checkedProducts.value.includes(code)) {
            checkedProducts.value = checkedProducts.value.filter((item) => item !== code);
        } else {
            checkedProducts.value.push(code);
        }
    }

    function deletecheckedProducts() {
        if (checkedProducts.value.length === 1) {
            const confirmed = confirm("Are you sure you want to delete this product?");
            if (confirmed) {
                const index = products.value.findIndex(product => product.code === checkedProducts.value[0]);
                const deletedProduct = products.value.splice(index, 1)[0]; // remove and get the deleted product
                checkedProducts.value = [];
                const deletedProducts = JSON.parse(sessionStorage.getItem('deletedProducts')) || []; // store the deleted product in session storage
                deletedProducts.push(deletedProduct);
                sessionStorage.setItem('deletedProducts', JSON.stringify(deletedProducts));
            }
        } else if (checkedProducts.value.length > 1) {
            alert("Please choose only one product");
        } else {
            alert("Please choose a product to delete");
        }
    }
</script>

<template>
    <main class="products-page">
        <div class="top-bar">
            <h1>Products <button @click="deletecheckedProducts">Delete</button> </h1>
        </div>
        <div class="products">
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th style="padding-left: 0;">CODE</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.code" :class="{ 'selected': checkedProducts.includes(product.code) }">
                        <td style="padding-right: 0;"><input type="checkbox" @click="toggleCheck(product.code)"></td>
                        <td style="padding-left: 0;">{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<style scoped>

/* checkbox */
.selected {
  background-color:var(--grey); 
}

input[type="checkbox"]{
    cursor: pointer;
}

/* top bar */
.top-bar{
    position:static;
    box-sizing: border-box;
    backface-visibility: hidden;
    background-color: var(--white);
    width: 100%;
    box-shadow: 2px 5px 5px #888888;
 
}
h1{
    font-family: 'OpenSans-Bold';
}

button{
    position: absolute;
    cursor: pointer;
    border: solid;
    font-family: 'OpenSans-Regular';
    text-align: right;
        
}

/* products table */

table{
    width: 100%;
    text-align: left;
    position: relative;
    list-style: none;
    border-collapse:collapse;
    border-spacing: 0px;
    
}
tr{
    right: 0;
    margin-left: 150px;
}
th{
    font-family: 'OpenSans-SemiBold';
    border-bottom: 2px solid #ccc;
    border-radius: 1px;
    position: relative;
    border-width: 100%;
    
}
td{
    border-bottom: 1px solid #ccc;
    font-family: 'OpenSans-Regular';
    height: 3rem;
}

/* media */

@media (max-width: 2000px) {
        table{
            margin-left: 0;
            
        }
        h1{
            margin-left: 160px;
            height: 50px;

        }
        .top-bar{
            text-decoration: none;
            margin-bottom: 2rem;
        }
        th{
            margin-bottom: 4rem;
            padding-bottom: 2rem;
            padding-left: 200px;
        }
        td{
            padding-left: 200px;
            padding-bottom: 1rem;
        }
        button{
            border-radius: 50px;
            padding-bottom: 2px;
            padding-right:10px ;
            margin-right: 30px;
            margin-top: 10px;
            width: 70px;
            height: 30px;
            right: 0;
                
        }
	}

    @media (max-width: 1024px) {
        h1{
            margin-left: 100px;
            height: 50px;
            padding-left: 0px;
            
            
        }
        td{
            padding-left: 100px;
            
        }
        th{
            padding-left: 100px;
            
        }
        button{
            border-radius: 50px;
            padding-bottom: 2px;
            padding-right:10px ;
            margin-right: 30px;
            margin-top: 10px;
            width: 70px;
            height: 30px;
            right: 0;
                
        }
    }
    
    @media (max-width: 400px) {
        h1{
            margin-left: 100px;
            height: 50px;
            padding-left: 0px;
            padding-top: 8px;
            font-size: large;
        }
        td{
            padding-left: 100px;
            
        }
        th{
            padding-left: 100px;
            
        }
        button{    
            border-radius: 50px;
            padding-bottom: 2px;
            padding-right: 7px;
            margin-right: 0px;
            margin-top: 10px;
            width: 60px;
            height: 30px;
            right: 0;
                
        }
    }


</style>