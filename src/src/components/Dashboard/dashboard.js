import React, { Component } from "react";
import { useEffect, useState } from "react";
import * as d3 from "d3";

function Dashboard() {
  const svgHeight = 200;
  const svgWidth = 600;
  const paddingLeft = 10;
  const paddingRight = 30;
  const paddingBottom = 20;
  const initialData = [35, 5, 15, 60, 20, 40, 10, 75, 60];
  const randomData = [...Array(10)].map((element) => ~~(Math.random() * 2)); //
  const [dataSet, setData] = useState(initialData);
  const svgRef = React.useRef();

  useEffect(() => {
    const maxValue = Math.max(...initialData);
    const highestYValue = svgHeight - maxValue + paddingBottom;
    const svg = d3.select(svgRef.current);
    const xScale = d3
      .scaleBand()
      .domain(dataSet.map((element, index) => index))
      .range([paddingLeft, svgWidth - paddingRight])
      .padding(0.5); // Scalband() takes a padding to separate bands

    const colorScale = d3
      .scaleLinear()
      .domain([30, ~~(highestYValue / 2), highestYValue])
      .range(["#C5EDAC", "#F7A278", "orange"])
      .clamp(true); // forces values defined in the domain to remain thecolors

    const yScale = d3
      .scaleLinear()
      .domain([0, highestYValue])
      .range([svgHeight - paddingBottom, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(dataSet.length);
    svg
      .select(".x-axis")
      .style("transform", ` translateY(${svgHeight - paddingBottom}px)`)
      .call(xAxis);

    const yAxis = d3.axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", ` translateX(${svgWidth - paddingRight}px)`)
      .call(yAxis);

    // Draw Bar
    svg
      .selectAll(".bar")
      .data(dataSet)
      .join("rect")
      .attr("class", "bar")
      .attr("transform", "scale(1, -1)") //flip the bar upside down to fix wron animation start
      .attr("x", (value, index) => xScale(index + 1))
      .attr("y", -svgHeight + paddingBottom)
      .attr("width", xScale.bandwidth()) // bandwidth equals to the width of one band
      .transition() //transition will animate attribute called after it
      .attr("fill", colorScale)
      .attr("height", (value) => svgHeight - yScale(value) - paddingBottom);
  }, [dataSet, initialData, randomData]);

  return (
    <div
      className="container"
      style={{ backgroundColor: "#fff", minHeight: "600px" }}
    >
      <div className="row">
        <div className="col-6">
          <h5>Top Movies</h5>
          <svg width={svgWidth} height={svgHeight} ref={svgRef}>
            <g className="x-axis" />
            <g className="y-axis" />
          </svg>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
export default Dashboard;
