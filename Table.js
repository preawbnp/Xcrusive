import React from 'react'
import Row from './Row'
export default class Table extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			keys: [ {'name':'X','type': 'x', 'ASC': null},
		            {'name':'Y','type': 'y', 'ASC': null},
		            {'name':'Conflagration','type': 'conflagration', 'ASC': null},
		            {'name':'Temperature','type': 'temp', 'ASC': null},
		            {'name':'Distance','type': 'distance', 'ASC': null}, ],
		    data: this.props.data
		}
	}
	render() {
		var element = this.state.data.map((i, id) => {
			return <Row data={i} key={id} />
		})
		var headerElement = this.state.keys.map((key, id) => {
			return <td><a onClick={this.sortData.bind(this, id)}>{ key['name'] + ' '}</a>{ this.setIconHeader(key.ASC) }</td>
		})
		return (
			<div>
				<h3>Ship's Static</h3>
				<table className="dataTable">
					<thead>
						<tr>
							{ headerElement }
							<td>date</td>
							<td>safety</td>
						</tr>
					</thead>
					<tbody>
						{ element }
					</tbody>
				</table>
			</div>
		)	

	}
	setIconHeader(ASC) {
		if(ASC === true)
			return <p inline>&uarr;</p>
		else if (ASC === false)
			return <p inline>&darr;</p>
		else
			return ''
	}
	sortData(index) {
		console.log(index)
		var { data, keys } = this.state
		let result = data.sort((obj1, obj2) => {
			var a = obj1.get(keys[index].type)
			var b = obj2.get(keys[index].type)
			if(!keys[index].ASC) 
				return a - b
			else
				return b - a
		})

		for(var i=0; i<keys.length; i++) {
			if(index === i)
				if(keys[i].ASC) keys[i].ASC = false
				else keys[i].ASC = true
			else
				keys[i].ASC = null
		}
		console.log(JSON.stringify(result))
		console.log(JSON.stringify(keys))
		this.setState({
			data: data,
			keys: keys
		})
	}
}