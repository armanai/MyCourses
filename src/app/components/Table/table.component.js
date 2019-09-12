import React, { PureComponent } from 'react'
import { PropTypes as P } from 'prop-types'

export default class Table extends PureComponent {
	static propTypes = {
		rows: P.array.isRequired
	}

	render() {
		//Taking only props object from childrens
		const columns = React.Children.map(
			this.props.children,
			child => child.props
		)

		return (
			<div className='table-responsive'>
				<table className='table table-sm'>
					<thead>
						<tr>{this.props.children}</tr>
					</thead>
					{this._renderRows(columns)}
				</table>
			</div>
		)
	}

	_renderRows = columns => {
		return (
			<tbody>
				{this.props.rows.map((row, index) => (
					<tr key={index}>
						{columns.map((col, index) => {
							const { dataID, cellRenderer } = col

							return <td key={index}>{cellRenderer({ row, dataID })}</td>
						})}
					</tr>
				))}
			</tbody>
		)
	}
}
