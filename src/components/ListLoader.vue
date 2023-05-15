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
    overflow: hidden;
  }
  
  #loading-bar .fill {
    height: 100%;
    background-color: var(--blue);
    position: absolute;
    width: 0%;
    animation: fill 2.5s linear forwards;
  }
  
  @keyframes fill {
    0% {
      width: 0%;
      left: 0%;
    }
    50% {
      left: 50%;
    }
    100% {
      width: 100%;
      left: 100%;
    }
  }
  </style>
  