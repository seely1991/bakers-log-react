import React, { Component } from 'react';
import './App.css';
import ingredients from './ingredients.js';
import conversion from './script.js';
import axios from 'axios';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"weight": false,
			"other": false,
			"title": "",
			"name": "",
			"qty": "",
			"unit-input": "cup",
			"unit-output": "NA",	
			"list": [],
			"errors": []
		}
		this.updateQty = this.updateQty.bind(this);
		this.updateUnitInput = this.updateUnitInput.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.updateUnitOutput = this.updateUnitOutput.bind(this);
		this.exitOther = this.exitOther.bind(this);
		this.addListItem = this.addListItem.bind(this);
		this.updateList = this.updateList.bind(this);
		this.updateName = this.updateName.bind(this);
		this.load = this.load.bind(this);
		this.save = this.save.bind(this);
		this.listItemChange = this.listItemChange.bind(this);
		this.removeAll = this.removeAll.bind(this);
	}
	updateQty(event) {
		this.setState({"qty": event.target.value})
	}
	updateUnitInput(event) {
		this.setState({"unit-input": event.target.value});
		if (event.target.value === 'other') {this.setState({'unit-input': '', 'other': true})};
		console.log(this.state)
	}
	updateItem(event) {
		if (ingredients[event.target.value]) {
			this.setState({"weight": true, "item": event.target.value})
		}else{
			this.setState({"weight": false, "item": event.target.value})
		}
	}
	updateUnitOutput(event) {
		this.setState({"unit-output": event.target.value});
	}
	exitOther() {
		this.setState({"unit-input": "cup", "other": "false"});
	}
	addListItem(event) {
		if (this.state.item === undefined || this.state.item === "") {return}
		let newItem = {
			"qty": this.state.qty,
			"unit-input": this.state["unit-input"],
			"item": this.state.item,
			"unit-output": this.state["unit-output"]
		}
		let list = this.state.list;
		list.push(newItem);
		this.setState({title: "", list: list});
	}
	updateList(event) {
		let updatedList = this.state.list;
		updatedList.splice(event.target.value, 1)
		this.setState({
			title: "",
			list: updatedList
		})
	}
	updateName(event) {
		this.setState({
			"name": event.target.value
		})
		console.log({state: this.state})
	}
	save() {
		let newError = this.state.errors;
		if (this.state.list.length === 0){
			newError.push("please add items to your list to save");
			this.setState({errors: newError})
		}else if (this.state.name === "") {
			newError.push("please enter in a name to save")
		}else{
			axios.post('api/save', {
				listName: this.state.name,
				list: this.state.list
			})
			.then(res => {
				newError.push(res.data);
				this.setState({errors: newError});
			})
			.catch(error => {
				console.log(error);
				newError.push("something went wrong with the server")
				this.setState({errors: newError});
			})
			if (newError.length > 0) {
				for (let i = 0; i < newError.length - 1; i++) {
					newError[i] = null
				}
			}
		}
			
	}
	load() {
		let newError = this.state.errors;
		if (this.state.name === "") {
			newError.push("please enter in a name to load")
			this.setState({errors: newError})
		}else{
			axios.get('/api/load?listName=' + this.state.name)
			.then(res => {
				if (res.data.list) {
					newError.push("loaded successfully");
					this.setState({title: res.data.name, list: res.data.list, errors: newError});
				}else{
					newError.push(res.data);
					this.setState({errors: newError})
				}
			})
			.catch(error => {
				newError.push("something went wrong with the server");
				this.setState({errors: newError})
			})
		}
		if (newError.length > 0) {
				for (let i = 0; i < newError.length - 1; i++) {
					newError[i] = null
				}
			}
	}
	listItemChange(event, index) {
		let newList = this.state.list;
		newList[index]["unit-output"] = event.target.value; 
		this.setState({list: newList})
	}
	removeAll() {
		this.setState({
			title: "",
			list: []
		})
	}
	render() {
			let unitInput; 
			let titleBanner = null;
			let removeAll = null;
			let acceptedConversions;
			if (this.state.weight === true) {
				acceptedConversions = ["NA", "cup", "floz", "tsp", "tbsp", "grams", "oz"]
			}else{
				acceptedConversions = ["NA", "cup", "floz", "tsp", "tbsp"]
			}
			if (this.state.other === true) {

				unitInput = <div id="other-container"><input id="other" type="text" onChange={this.updateUnitInput} placeholder="other"></input><button id="exit-other" className="delete" onClick={this.exitOther}>&#x2715;</button></div>
			}else{
				unitInput = <Select id="unit-input" onChange={this.updateUnitInput} options={["cup", "flox", "tsp", "tbsp", "grams", "oz", "other"]} />
			} 
			if (this.state.title !== "") {titleBanner = (<h1>{this.state.title}</h1>)}
			if (this.state.list && this.state.list.length) {
				removeAll = (
				<button id="remove-all" className="input-small small-button fade-quick" onClick={this.removeAll}>REMOVE ALL</button>
				)}
			return (
			<main>
				<img alt="" src="https://stmed.net/sites/default/files/baking-wallpapers-28205-3565070.jpg"></img>
				<div id="save-load" className="fade">
					<input id="name" type="text" className="input-small" name="listName" placeholder="load/save your list!" onChange={this.updateName} />
		        	<button id="saveButton" className="input-small small-button" type="default" onClick={this.save}>save</button>
		        	<button id="loadButton" type="default" className="input-small small-button" onClick={this.load}>load</button>
			    </div>
			    <Error messages={this.state.errors}/>
			    {titleBanner}
				<div id="appContent" className="fade">
					<input id="quantity" type="number" onChange={this.updateQty} placeholder="amnt"></input>
					{unitInput}
					<input id="ingredient" type="text" onChange={this.updateItem} placeholder="ingredient"></input>
					<p>converted to</p>
					<Select id="unit-output" onChange={this.updateUnitOutput} options={acceptedConversions} />
					<button id="add" onClick={this.addListItem} >ADD</button>
					<div id="list">
						<List listData={this.state.list} action={this.updateList} change={this.updateUnitOutput} listItemChange={this.listItemChange}/>
						{removeAll}
					</div>
				</div>
			</main>
		)
	}
}

class Select extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		const options = this.props.options.map(x => <option key={x} value={x}>{x}</option>)
		return (
			<select id={this.props.id} onChange={this.props.onChange} className="dropdown">
				{options}
			</select>
		)
	}
}

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		this.highlight = this.highlight.bind(this);
		this.unHighlight = this.unHighlight.bind(this);
	}
	highlight(index) {
		console.log({"this.refs['listItem' + index]": this.refs["listItem" + index]})
		this.refs['listItem' + index].style.backgroundColor = "#EDEDED"
	}
	unHighlight(index) {
		this.refs['listItem' + index].style.backgroundColor = "";
	}
	render() {
		const divs = this.props.listData.map((x, index) => {
			function checkSelected(value) {
				let listUnit = x['unit-output'];
				if (listUnit === "NA") {listUnit = x['unit-input']};
				if (listUnit === value) {return 'selected'}else{return}
			}
			let select = null;
			if (["NA", "cup", "floz", "tsp", "tbsp", "grams", "oz"].includes(x['unit-input'])) {
				if (ingredients[x.item]) {
					select = (
						<select onMouseOver={() => this.highlight(index)} onMouseOut={() => this.unHighlight(index)} onChange={(event)=>{this.props.listItemChange(event, index)}} >
							<option value="cup" selected={checkSelected("cup")}>cup</option>
							<option value="floz" selected={checkSelected("floz")}>floz</option>
							<option value="tsp" selected={checkSelected("tsp")}>tsp</option>
							<option value="tbsp" selected={checkSelected("tbsp")}>tbsp</option>
							<option value="grams" selected={checkSelected("grams")}>grams</option>
							<option value="oz" selected={checkSelected("oz")}>oz</option>
						</select>
					)}else{
					select = (
							<select onMouseOver={() => this.highlight(index)} onMouseOut={() => this.unHighlight(index)} onChange={(event)=>{this.props.listItemChange(event, index)}} >
								<option value="cup" selected={checkSelected("cup")}>cup</option>
								<option value="floz" selected={checkSelected("floz")}>floz</option>
								<option value="tsp" selected={checkSelected("tsp")}>tsp</option>
								<option value="tbsp" selected={checkSelected("tbsp")}>tbsp</option>
							</select> 
					)}
				}
			return (
					<div className="fade-quicker">
						<div ref={"listItem" + index} className="listItem">
							{conversion(x.qty, x.item, x['unit-input'], x['unit-output'])}
						</div>
						<button className="delete delete-list" key={index} value={index} onMouseOver={() => this.highlight(index)} onMouseOut={() => this.unHighlight(index)} onClick={this.props.action}>&#x2715;</button>
						{select}
					</div>
				)
		})
			return(divs)
	}
}

class Error extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		console.log(this.props);
		let messages = null;
		if (this.props.messages) {
			messages = this.props.messages.map(x => {
				if (x === null) {
					return
				}else{
					return (
							<p className="error-message">{x}</p>
						)
				}
			})
		}
		return (
				<div>{messages}</div>
			)
	}

}

export default App;
