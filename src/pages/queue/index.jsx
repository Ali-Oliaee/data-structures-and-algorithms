import { useState } from "react"
import MainLayout from "@layouts"
import { Button, Collapse, message } from "antd"
import Codes from "./codes"
import "./styles.scss"

const QueuePage = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const { Panel } = Collapse
  const [queue, setQueue] = useState([1, 3])
  const dequeue = () => {
    if (queue.length === 0) return messageApi.error("Queue is empty")
    setQueue(queue.slice(1))
  }
  const enqueue = () => {
    if (queue.length === 12) return messageApi.error("Queue is full")
    const random = Math.floor(Math.random() * 100)
    setQueue([...queue, random])
  }

  return (
    <MainLayout>
      {contextHolder}
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
                {queue.length === 1 && (
                  <span className="queue-item-last top-queue">Tail</span>
                )}
                {item}
                {index === queue.length - 1 && queue.length !== 1 && (
                  <span className="queue-item-last">Tail</span>
                )}
                {index === 0 && <span className="queue-item-first">Head</span>}
              </span>
            ))}
          </div>
          <p className="size-text">Queue size: 12</p>
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
