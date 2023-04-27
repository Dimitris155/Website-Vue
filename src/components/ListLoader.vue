<template>
  <div id="loading-bar">
    <div class="fill"></div>
  </div>
</template>


<style scoped>
    
/* bar-loader */
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

#loading-bar{
    display:flex;
    justify-content: center;
    align-items: center;
    min-height:100vh;
    
}
.fill{
    position:relative;
    width:100px;
    height: 100px;
    background-color: var(--blue);
    -webkit-box-reflect: below 1px linear-gradient(transparent, var(--blue));
}
.fill::before{
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--blue),var(--lightblue));
    animation: animate 20s linear infinite;
    background-size: 500%;
}
.fill::after{
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--blue),var(--lightblue));
    animation: animate 20s linear infinite;
    background-size: 500%;
    filter: blur(20px);
}
@keyframes animate{
    0%{
        background-position: 0 0 ;
    }
    0%{
        background-position: 500% 0 ;
    }
}

</style>