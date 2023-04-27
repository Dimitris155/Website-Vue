
<script setup>

    import ListLoader from '../components/ListLoader.vue'
    import {onMounted, ref} from 'vue'

    /*getting the data from the json file */
    const customers = ref([])
    async function getCustomers() {
        const res = await fetch('/data/customers.json')
        const data = await res.json();
        customers.value = data
    }
    onMounted(() => getCustomers())

    /* Bar loading before the list appear */
    function closeListLoader(){
		isListLoading.value = false;
	}
	onMounted(() => {

		setTimeout(closeListLoader, 2000);
	})

	const isListLoading = ref(true);


</script>


<template>
    <ListLoader v-if="isListLoading" />

    <main class="customers-page">
        <div class="top-bar">
            <h1>Customers</h1>
        </div>
        <div class="customers" v-if="!isListLoading">
            <table>
                <thead>
                    <tr>
                        <th>CODE</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customers" :key="customer.code" >
                        <td>{{ customer.code }}</td>
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.address }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<style scoped>

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
    display: inline-block;
    text-align: left;
    font-family: 'OpenSans-Bold';
}

/* customers table */
table{
    width: 100%;
    text-align: left;
    position: relative;
    list-style: none;
    border-collapse:collapse;
    border-spacing: 0px;
    
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
}


</style>
