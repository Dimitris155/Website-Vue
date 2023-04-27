<template>
    <div id="loading-bar">
      <div class="fill"></div>
    </div>
</template>
  
<style scoped>
      
/* bar-loader */

#loading-bar {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 20%;
height: 5px;
background-color: var(--lightblue);
z-index: 9999;
border-radius: 50px;
padding-left: 2px;
}

#loading-bar .fill {
height: 100%;
background-color: var(--blue);
animation: fill 3s ease-out forwards;
}

@keyframes fill {
from {
    width: 0%;
}
to {
    width: 100%;
}
}
  
</style>
  