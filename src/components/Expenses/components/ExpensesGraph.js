import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

// styles
import classes from './ExpensesGraph.module.css';

const ExpensesGraph = () => {
  // 1 Setup Initial data and settings
  const initialData = [
    { title: 'Car', amount: 10, date: '12/02/2023' },
    { title: 'Food', amount: 5, date: '12/02/2023' },
    { title: 'Entertainment', amount: 15, date: '12/02/2023' },
  ];

  const width = 500;
  const height = 150;
  const padding = 20;
  const maxValue = 20;

  const [graphData, setGraphData] = useState(initialData);

  const svgRef = useRef();
  // 2 Setup random data generator and SVG canvas
  const newData = () => {
    return graphData.map((d) => {
      d.amount = Math.floor(Math.random() * (maxValue + 1));
      return d;
    });
  };

  useEffect(() => {
    // 3 Setup function for Scales

    // xScalses
    const xScale = d3
      .scalePoint()
      .domain(graphData.map((d) => d.title))
      .range([0 + padding, width - padding]);

    // yScales
    const yScalse = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(graphData, (d) => {
          return d.amount;
        }),
      ])
      .range([height - padding, padding]);

    // 4 Setup functions for draw lines
    const line = d3
      .line()
      .x((d) => xScale(d.title))
      .y((d) => yScalse(d.amount))
      .curve(d3.curveMonotoneX);

    // 5 Draw line
    d3.select(svgRef.current)
      .select('path')
      .attr('d', (amount) => line(graphData))
      .attr('fill', 'none')
      .attr('stroke', 'white');

    // 6 Setup functions to draw X and Y Axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScalse);

    // 7 Draw x and y Axes
    d3.select('#xaxis').remove();
    d3.select(svgRef.current)
      .append('g')
      .attr('tranform', `translate(0,${height - padding})`)
      .attr('id', 'xaxis')
      .call(xAxis);

    d3.select('#yaxis').remove();
    d3.select(svgRef.current)
      .append('g')
      .attr('tranform', `translate(${padding},0)`)
      .attr('id', 'yaxis')
      .call(yAxis);
  }, [graphData]);

  return (
    <div className={classes.graph}>
      <svg id='chart' ref={svgRef} viewBox='-20 -10 500 150'>
        <path d='' fill='none' stroke='white' strokeWidth='2' />
      </svg>
      <p>
        <button type='button' onClick={() => setGraphData(newData())}>
          Chart Data
        </button>
      </p>
    </div>
  );
};

export default ExpensesGraph;
