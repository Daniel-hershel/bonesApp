Vue.component('NameInput', {
  data: function (){
  	return {
  		name: '',
  		score: ''
  	}
  }, 

  template: '<input class = "nameInput" v-model="nameOne" placeholder="edit me"> <p>{{ nameOne }}</p><button v-on:click="addToCount($event)">Go</button><input class = "scoreInput" v-model.number="scoreOne" type="number" placeholder="score?"><p>{{ scoreOne }}</p><button v-on:click="addScore">Go</button>'

})
new Vue({
  el: '#grid',
  data: {
  	message: '',
    nameOne: '',
    nameTwo: '',
    nameThree: '',
    nameFour: '', 
    scoreOne: 0
  },

  methods:{
  	 addToCount: function(elem) {
  	 	let $elem = $(elem.srcElement)
  	 	let input = $elem.siblings().find('.nameInput')
  	 	// console.log(srcElement)
  	 	$(input).hide()

  	 	
    // this.count = this.count + parseInt(this.addValue);
  },


  addScore: function(event){



  	this.scoreOne += parseInt(this.scoreOne)
  	console.log(event.target)
  	// console.log($event)
  	      // event.target.text = "";


  }
}

})
