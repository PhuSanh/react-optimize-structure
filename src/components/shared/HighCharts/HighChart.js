import React, { Component } from "react";
import Highcharts from "highcharts";

const defaultOptions = {
	global: {
    useUTC: false
  },
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  },
  credits: {
    enabled: false
	},
	legend: { 
		enabled: false 
	},
  title: {
    text: ''
  },
	chart: { type: 'column' },
	xAxis: {
		type: 'category',
		labels: {
			rotation: -45,
			style: {
				fontSize: '13px',
				fontFamily: 'Verdana, sans-serif'
			}
		}
	},
}

class HighChart extends Component {

	constructor(props) {
		super(props);
		this.chart = React.createRef();
	}

	componentDidMount() {
		const optionMerge = { ...defaultOptions, ...this.props.options };
		this.chart = new Highcharts.Chart("container",
			optionMerge
		);
	}

	componentDidUpdate() {
		const optionMerge = { ...defaultOptions, ...this.props.options };
		this.chart = new Highcharts.Chart("container",
			optionMerge
		);
	}

	componentWillUnmount() {
		this.chart.destroy();
	}

	render() {
		return (
			<div id="container" ref="chart" />
		);
	}
}

export default HighChart;