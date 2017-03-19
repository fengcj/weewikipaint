1. directive
	v-bind  
		(class/style)  // all can be bind to Array
	v-on
		v-on:keyup.enter.space   // Key Modifiers
		v-on:mousemove.stop      // Event Modifiers
		$event  
	v-model
	v-once
	v-html
	v-if / v-else / v-show 
	v-for
	ref
2. arguments in New Vue
	el
	data
	methods
	comouted
	watch


3. question:

https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5942322?start=0
new Vue({
  el: '#app',
  render: h => h(App)
})

render : function (h){
  return h(App);
}

render(createElement);

https://segmentfault.com/q/1010000007130348
https://segmentfault.com/q/1010000007826464


4. view

Try to decide that on a logical basis: Does your code (template/ HTML + JS) have its own business logic? Is it a logical unit of your project? If yes, it might be worth thinking about creating a new component for that piece of code. If not, leave it in the component it currently is in. 

5. 子组件
     this.emit("attached",data);
     <child @attached="callback">

     @click.native     


  





