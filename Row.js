import React from 'React'
export default class Row extends React.Component {
	render() {
		var data = this.props.data
		var date = data.get('createdAt')
		var safety = data.get('safety')
		var style = {
			width: "12px",
			height: "12px",
			borderRadius: "50%",
			backgroundColor:'#fbe105',
			color: "#fbe105",
			fontSize: "1%",
			marginLeft: "30px"
		}
		if(safety === 0) {
			style['backgroundColor'] = '#e74c3c'
		}
		else if (safety === 1) {
			style['backgroundColor'] = '#fbe105'
		}
		else {
			style['backgroundColor'] = '#1abc9c'
		}
		
		return(
			<tr>
				<td>{ data.get('x') }</td>
				<td>{ data.get('y') }</td>
				<td>{ data.get('conflagration') }</td>
				<td>{ data.get('temp') }</td>
				<td>{ data.get('distance') }</td>
				<td>{ date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() }</td>
				<td><div style={style}>s</div></td>
			</tr>
		)
	}
}