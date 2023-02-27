import React from "react"
import { Collapse, Segmented } from "antd"
import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import "./styles.scss"

const CodeWrapper = ({ data }) => {
  const { Panel } = Collapse
  const options = data.map(({ title }) => title)
  const [segment, setSegment] = useState(options[0])

  return (
    <Collapse className="code-wrapper">
      <Panel header="Codes">
        <Segmented
          size="large"
          type="primary"
          options={options}
          onChange={(e) => setSegment(e)}
        />
        {data
          .filter((code) => code.title === segment)
          .map((item) =>
            item.codes.map((section) => (
              <div key={section.subtitle}>
                <h1 className="code-title">{section.subtitle}</h1>
                <SyntaxHighlighter language="cpp" style={tomorrow}>
                  {section.code}
                </SyntaxHighlighter>
              </div>
            ))
          )}
      </Panel>
    </Collapse>
  )
}

export default CodeWrapper
