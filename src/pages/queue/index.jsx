import { useState } from "react"
import MainLayout from "../../layout"
import { Button, Collapse } from "antd"
import Codes from "./codes"
import "./styles.scss"

const QueuePage = () => {
  const { Panel } = Collapse
  const [queue, setQueue] = useState([1, 3])
  const dequeue = () => setQueue(queue.slice(1))
  const enqueue = () => {
    const random = Math.floor(Math.random() * 100)
    setQueue([...queue, random])
  }
  return (
    <MainLayout>
      <div className="queue-page">
        <h4>Queue</h4>
        <p>
          We define a queue to be a list in which all additions to the list are
          made at one end, and all deletions from the list are made at the other
          end. The element which is first pushed into the order, the operation
          is first performed on that.
        </p>
        <div className="queue-container">
          <div className="queue">
            {queue.map((item, index) => (
              <span key={index} className="queue-item">
                {item}
                {index === queue.length - 1 && (
                  <span className="queue-item-last">Tail</span>
                )}
                {index === 0 && <span className="queue-item-first">Head</span>}
              </span>
            ))}
          </div>
          <div className="buttons">
            <Button className="button" type="primary" onClick={enqueue}>
              Enqueue
            </Button>
            <Button className="button" type="primary" onClick={dequeue}>
              Dequeue
            </Button>
          </div>
        </div>
        <Collapse className="codes-container">
          <Panel header="Codes">
            <Codes />
          </Panel>
        </Collapse>
      </div>
    </MainLayout>
  )
}

export default QueuePage
