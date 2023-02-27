import Node from "../../classes/Node"
import BinarySearchTree from "../../classes/BST"
import { useState } from "react"
import "./styles.scss"
import { useEffect } from "react"
import { Button } from "antd"

const BST = () => {
  const [bstree, setBinarySearchTree] = useState(null)
  const drawTree = (data) => {
    var margin = {
        top: 80,
        bottom: 80,
      },
      width = 800,
      height = 600 - margin.top - margin.bottom

    var svg = d3
      .select("body")
      .select("#root")
      .append("svg")
      .attr("width", "100%")
      .attr("height", height + margin.top + margin.bottom)
      .attr("viewBox", "0 0 800 600")
      .append("g")
      .attr("transform", "translate(0," + margin.top + ")")

    var i = 0,
      duration = 750,
      root

    var treemap = d3.tree().size([width, height])

    root = d3.hierarchy(data, (d) => d.children)

    root.x0 = width / 2
    root.y0 = 0

    update(root)

    function update(source) {
      var treeData = treemap(root)

      var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1)

      nodes.forEach(function (d) {
        d.y = d.depth * 100
      })

      var node = svg
        .selectAll("g.node")
        .data(nodes, (d) => d.id || (d.id = ++i))

      var nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr(
          "transform",
          (d) => "translate(" + source.x0 + "," + source.y0 + ")"
        )
        .on("click", click)

      nodeEnter
        .append("circle")
        .attr("class", function (d) {
          if (isNaN(d.value)) return "node hidden"
          return "node"
        })
        .attr("r", 1e-6)
        .style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"))

      nodeEnter
        .append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("font-size", "32px")
        .attr("font-weight", "bold")
        .attr("fill", "black")
        .text(function (d) {
          if (isNaN(d.value)) return ""
          return d.data.value
        })

      var nodeUpdate = nodeEnter.merge(node)

      nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")"
        })

      nodeUpdate
        .select("circle.node")
        .attr("r", 20)
        .style("fill", "#fff")
        .attr("cursor", "pointer")

      let nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr(
          "transform",
          (d) => "translate(" + source.x + "," + source.y + ")"
        )
        .remove()

      nodeExit.select("circle").attr("r", 1e-6)

      nodeExit.select("text").style("fill-opacity", 1e-6)

      var link = svg.selectAll("path.link").data(links, (d) => d.id)

      var linkEnter = link
        .enter()
        .insert("path", "g")
        .attr("class", function (d) {
          if (isNaN(d.value)) return "link hidden "
          return "link"
        })

        .attr("d", function (d) {
          var o = {
            x: source.x0,
            y: source.y0,
          }
          return diagonal(o, o)
        })

      var linkUpdate = linkEnter.merge(link)

      linkUpdate
        .transition()
        .duration(duration)
        .attr("d", (d) => diagonal(d, d.parent))

      var linkExit = link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", function (d) {
          var o = {
            x: source.x,
            y: source.y,
          }
        })
        .remove()

      nodes.forEach(function (d) {
        d.x0 = d.x
        d.y0 = d.y
      })

      function diagonal(s, d) {
        const path = `M ${s.x} ${s.y}
          C ${(s.x + d.x) / 2} ${s.y},
            ${(s.x + d.x) / 2} ${d.y},
            ${d.x} ${d.y}`

        return path
      }

      function click(d) {
        if (d.children) {
          d._children = d.children
          d.children = null
        } else {
          d.children = d._children
          d._children = null
        }
        update(d)
      }
    }
    setBinarySearchTree(svg.node())
    console.log(svg.node())
  }

  const createRandomTree = () => {
    const preTree = document.querySelector("svg")
    if (preTree) preTree.remove()
    const tree = new BinarySearchTree(50)
    for (let i = 0; i < 10; i++) tree.insert(Math.floor(Math.random() * 100))
    drawTree(tree.root)
  }

  return (
    <>
      <h1>Binary Search Tree</h1>
      <Button onClick={createRandomTree} type="primary">
        Create Random Tree
      </Button>
    </>
  )
}

export default BST
