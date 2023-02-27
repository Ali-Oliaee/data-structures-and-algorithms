import sortSpeeds from "@/utils/sort-speeds"
import {
  PauseOutlined,
  PlayCircleOutlined,
  RollbackOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons"
import { Select, Button } from "antd"
import "./styles.scss"

const SortControls = ({
  onPlay,
  onPause,
  onBackward,
  onForward,
  onRepeat,
  onAdjustSpeed,
  playing,
  playDisabled,
  pauseDisabled,
  backwardDisabled,
  forwardDisabled,
  repeatDisabled,
  playbackSpeed,
}) => {
  const isDisabled = (action, disabled = false) =>
    action === undefined || disabled

  return (
    <div className="sort-controls-container">
      <Button
        icon={<RollbackOutlined />}
        // onClick={onRepeat}
        disabled={isDisabled(onRepeat, repeatDisabled)}
        className="VisualizerControls__Button"
      />

      <Button
        icon={<StepBackwardOutlined />}
        // onClick={onBackward}
        disabled={isDisabled(onBackward, backwardDisabled)}
        className="VisualizerControls__Button"
      />

      <Button
        icon={playing ? <PauseOutlined /> : <PlayCircleOutlined />}
        onClick={playing ? onPause : onPlay}
        // disabled={
        //   playing
        //     ? isDisabled(onPause, pauseDisabled)
        //     : isDisabled(onPlay, playDisabled)
        // }
        className="VisualizerControls__CenterButton"
      />

      <Button
        icon={<StepForwardOutlined />}
        // onClick={onForward}
        disabled={isDisabled(onForward, forwardDisabled)}
        className="VisualizerControls__Button"
      />

      <Select placeholder="1x" options={sortSpeeds} onChange={onAdjustSpeed} />
    </div>
  )
}

export default SortControls
