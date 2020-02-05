<template>
  <div class="mr-loading3">
    <slot>
      <h2>加载中，请稍后</h2>
    </slot>    
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style>
.mr-loading3 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -50px;
  width: 200px;
  text-align: center;
}
.mr-loading3 span {
  display: inline-block;
  vertical-align: middle;
  width: .6em;
  height: .6em;
  margin: .19em;
  background: #007DB6;
  border-radius: .6em;
  animation: mr-animate-loading3 1s infinite alternate;
}
.mr-loading3 span:nth-of-type(2) {
  background: #008FB2;
  animation-delay: 0.2s;
}
.mr-loading3 span:nth-of-type(3) {
  background: #009B9E;
  animation-delay: 0.4s;
}
.mr-loading3 span:nth-of-type(4) {
  background: #00A77D;
  animation-delay: 0.6s;
}
.mr-loading3 span:nth-of-type(5) {
  background: #00B247;
  animation-delay: 0.8s;
}
.mr-loading3 span:nth-of-type(6) {
  background: #5AB027;
  animation-delay: 1.0s;
}
.mr-loading3 span:nth-of-type(7) {
  background: #A0B61E;
  animation-delay: 1.2s;
}
@keyframes mr-animate-loading3 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>