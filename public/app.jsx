var App = React.createClass({
	getDefaultProps: function(){
		return{
			city:""
		};
	},

	getInitialState: function(){
		return{
			city: this.props.city
		}
	},

	onButtonClick: function(e){
		e.preventDefault();

		var cityRef = this.refs.city;

		var city = cityRef.value;
		this.refs.city.value = "";

		if(city.length > 0){
			this.setState({
				city: city
			});
		}
	},

	render:function(){
		var city = this.state.city;
		return(
			<div>
				<h1>Weather App</h1>
				<p>This is an app using Simple Weather JS</p>
				<p>{city}</p>
				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="city" placeholder="City"/>
					<button>Search</button>
				</form>
			</div>
		);
	}
});

ReactDOM.render(
	<App/>, 
	document.getElementById('app')
);