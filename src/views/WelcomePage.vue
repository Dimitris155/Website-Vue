
<template>
    <main class="welcome-page">
        <div class="top-bar">
            <h1>Welcome</h1>
        </div>
    </main>
</template>

<style scoped>

/*top bar */
.top-bar{
    position:static;
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

/* media */

@media (max-width: 2000px) {
       
    h1{
        margin-left: 160px;
        height: 50px;

    }
    .top-bar{
        text-decoration: none;
        margin-bottom: 2rem;
    }
}

@media (max-width: 1024px) {
    h1{
        margin-left: 100px;
        height: 50px;
        padding-left: 0px;
    }
}


</style>
