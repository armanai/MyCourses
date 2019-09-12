import React, { PureComponent } from 'react'
import { PropTypes as P } from 'prop-types'

function defaultCellRenderer({ row, dataID }) {
	return row[dataID]
}

export default class TableHeader extends PureComponent {
	static propTypes = {
		label: P.string,
		dataId: P.string,
		cellRenderer: P.func
	}

	static defaultProps = {
		label: '',
		cellRenderer: defaultCellRenderer
	}

	render() {
		return <th>{this.props.label || this.props.children}</th>
	}
}
