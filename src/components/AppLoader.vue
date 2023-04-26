
<template>
    <div id="container" class="container" >
        <div class="wrapper">
            <div class="loader">
                <div class="element"></div>
            </div>
            <div class="loader">
                <div class="element"></div>
            </div>
            <div class="loader">
                <div class="element"></div>
            </div>
            <div class="loader">
                <div class="element"></div>
            </div>
            <div class="loader">
                <div class="element"></div>
            </div>
            <div class="loader">
                <div class="element"></div>
            </div>
            <div class="loader">
                <div class="element"></div>
            </div>
            <div class="loader">
                <div class="element"></div>
            </div>
        </div>
    </div>          
</template>

<style>
    
/* spin-loader */

.container {
    position: absolute;
    display: flex;
    left:50%;
    top:50%;
    justify-content: center;
    transition: opacity 0.75s, visibility 0.75s;
}

.container--hidden{
    opacity: 0;
    visibility: hidden;
}
.loader{
    height: 60px;
    width: 60px;
    position: absolute;
    left: -35px;
    animation: spin 3s linear infinite;
}

.container .wrapper{
    position: absolute;
    top: -35px;
}

.loader .element{
    height: 10px;
    width: 10px;
    background-color: var(--blue);
    border-radius: 10px;
    position: relative;
    top: 1px;
}

.loader:nth-child(1){
    animation-delay: 0.10s ;
}
.loader:nth-child(2){
    animation-delay: 0.20s;
}
.loader:nth-child(3){
    animation-delay: 0.30s;
}
.loader:nth-child(4){
    animation-delay: 0.40s;
}
.loader:nth-child(5){
    animation-delay: 0.50s;
}
.loader:nth-child(6){
    animation-delay: 0.60s;
}
.loader:nth-child(7){
    animation-delay: 0.70s;
}
.loader:nth-child(8){
    animation-delay: 0s;
}

@keyframes spin {
    30% { transform: rotate(220deg); opacity:0; }
    40% { transform: rotate(450deg); opacity:0.8;}
    70% { transform: rotate(720deg); opacity:1; }
    71% { opacity: 0; }
    100% { transform: rotate(0deg); opacity: 0;}
}
</style>
