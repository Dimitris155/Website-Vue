<script setup>
    import ListLoader from '../components/ListLoader.vue'
    import { ref, onMounted } from 'vue';

    const users = ref([]);

    async function getUsers() {
        const res = await fetch('/data/users.json');
        let data = await res.json();
        const sessionData = JSON.parse(sessionStorage.getItem('users')); 
        if (sessionData && sessionData.length > 0) { // Check if there is any data in session storage
            data = [...sessionData,...data];
        }
        users.value = data;
    }

    onMounted(() => {
    getUsers();
    });
    
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
    <main class="users-page">
        <div class="top-bar">
            <h1>Users  
            <router-link to="/adduser" class="button">
			    <button>Add New</button>
		    </router-link> </h1>
        </div>
        <div class="users" v-if="!isListLoading">
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>CODE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.code" >
                        <td>{{ user.name }}</td>
                        <td>{{ user.code }}</td>
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
    font-family: 'OpenSans-Bold';
}

button{
    position: absolute;
    cursor: pointer;
    border: solid;
    font-family: 'OpenSans-Regular';
    text-align: right;
    
}

/* users table */
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
        
        button{
            border-radius: 50px;
            padding-bottom: 2px;
            padding-right:15px ;
            margin-right: 30px;
            margin-top: 10px;
            width: 90px;
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
            padding-right:15px ;
            margin-right: 30px;
            margin-top: 10px;
            width: 90px;
            height: 30px;
            right: 0;
                
        }
    }
    @media(max-width: 400px){
        h1{
            margin-left: 100px;
            height: 50px;
            padding-left: 0px;
            font-size: x-large;
            margin-top: 5px;
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
            padding-right:7px ;
            margin-right: 0px;
            margin-top: 5px;
            width: 80px;
            height: 30px;
            right: 0;
            position: fixed;    
        }

    }

</style>
