<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const name = ref('');
    const code = ref('');
    const router = useRouter();

    function createUser() {
        if (name.value && code.value) {
            const user = {
                name: name.value,
                code: code.value,
            };

            const users = JSON.parse(sessionStorage.getItem('users')) || [];
            users.push(user);
            sessionStorage.setItem('users', JSON.stringify(users));
            users.push(user);
            router.push('/users');
        } else {
            alert('All fields are required!');
        }
    }

</script>

<template>
    <main class="adduser-page">
       <div class="top-bar">
         <h1> <router-link to="/users" class="material-symbols-outlined"> arrow_back </router-link>Add new user 
            <button @click="createUser">Create</button></h1>
       </div>
       <form class="add">
            <label>NAME<span class="required">*</span></label><br />
            <input type="text" v-model="name" required><br />
            <label>CODE<span class="required">*</span></label><br />
            <input type="text" v-model="code" required>
       </form>
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
    text-decoration: none;
}
h1{
    font-family: 'OpenSans-Bold';
}
button{
    position: absolute;
    cursor: pointer;
    border: solid;
    font-family: 'OpenSans-Regular';
    right: 0;  
}

/* user input */
.add{
    list-style: none;
    font-family: 'OpenSans-Regular';
    position: relative;
    text-align: left;
    
}
input{
    border-style: hidden;
    border-bottom: solid var(--grey);;
    padding: 10px;
    width: 100%;
}
.required {
  color: var(--red);
  margin-left: 5px;
}
.material-symbols-outlined {
    color: var(--black);
    font-style: none;
    font-weight: bold;
    text-decoration: none;
    margin-right: 10px;
    width: 20px;
}

/* media */

@media (max-width: 2000px) {
        h1{
            margin-left: 160px;
            height: 50px;
        }
        .top-bar{
            padding: 10px;
        }

        button{
            border-radius: 50px;
            padding-right: 0px;
            margin-right: 20px;
            width: 80px;
            height: 40px;
            margin-top: 5px;
            font-size: medium;
        }
        .add{
            padding: 10px;
            margin: 20px;
            margin-left: 200px;
        }
        .material-symbols-outlined {
            width: 20px;
            margin-right: 20px;
        }
	}

@media (max-width: 1024px) {
    h1{
        margin-left: 100px;
        height: 30px;
        padding-left: 0px;
        font-size: large;
        padding-top: 3px;
        
    }
    button{
        border-radius: 50px;
        padding-right: 0px;
        margin-right: 20px;
        width: 70px;
        height: 30px;
        right: 0;
        margin-top: 0px;      
        }
    .add{
        padding: 10px;
        margin: 20px;
        margin-left: 150px;
    }
    .material-symbols-outlined {
            width: 20px;
            margin-right: 20px;
            
        }
}
@media(max-width: 400px){
    h1{
        margin-left: 90px;
        height: 30px;
        padding-left: 0px;
        font-size: small;
        padding-top: 3px;
        
    }

    button{
        border-radius: 30px;
        margin-right: 3px;
        padding-right: 0px;
        font-size: x-small;
        width: 50px;
        height: 30px;
    }
    .add{
        height: 300px;
        padding: 10px;
        margin: 20px;
        margin-left: 100px;
    }
    .material-symbols-outlined {
        width: 5px;
        margin-right: 20px;
        font-size: medium;
    }
}

</style>
