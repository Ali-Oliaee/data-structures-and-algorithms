import "./styles.scss"

const ProgressBar = ({ width }) => (
  <div className="progress-bar">
    <div
      className="progress-bar-active"
      style={{
        width: `${width}%`,
      }}
    ></div>
  </div>
)

export default ProgressBar
