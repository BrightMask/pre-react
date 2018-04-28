import React from 'react'
import * as d3 from "d3";
import './left-one.css'

let ChartData = [
    {
        name: '苹果',
        value: 40
      },
      {
        name: '香蕉',
        value: 30
      },
      {
        name: '橘子',
        value: 20
      },
      {
        name: '葡萄',
        value: 40
      }, {
        name: '芒果',
        value: 20
      }


]


class DashBoardLeftOne extends React.Component {

    //绘制图表
    componentDidMount () {
        // init
        var width = 300
        var height = 150;
        var colorList = d3.schemeCategory10;
        var chartBoard  = d3.select("#dashboard-left-one-chart")
        .append("svg")
        .attr('width', '350px')
        .attr('height','300px')
        .attr('class', 'chart-one-box')


        // x axis
        var xScale = d3.scaleBand()
        .rangeRound([0,width])
        .paddingOuter(0.3)
        .paddingInner(0.3)
        .domain(ChartData.map(function (d) {
            return d.name
        }))

        //y axis
        var yScale = d3.scaleLinear()
        .rangeRound([height,0])
        .domain([0, d3.max(ChartData.map(function (d) {
            return d.value
        }))])

        //group
        var group = chartBoard.append('g')
        .attr('transform', 'translate(40,40)');

        var xAxis = group.append('g')
        .attr('class', 'xAxis_barChart')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(xScale))

        var yAxis = group.append('g')
        .attr('class', 'yAxis_barChart')
        .call(d3.axisLeft(yScale).ticks(5))


        group.selectAll('.bar')
        .data(ChartData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => xScale(d.name))
        .attr('y', height)
        .attr('height',1)
        .attr('width',5)
        .attr('fill',(d, i) => {
            return colorList[i]
        })

        .transition()
        .duration(1000)
        .delay((d, i) => i * 500/3)
        .attr('height', (d) => {
            return height - yScale(d.value)
        })
        .attr('y', (d) => yScale(d.value))


    }





    render () {
        return (
            <div id="dashboard-left-one-chart" >

            </div>
        )
    }
}
export default DashBoardLeftOne
