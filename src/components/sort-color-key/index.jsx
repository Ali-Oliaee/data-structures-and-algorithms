import "./styles.scss"

const SortColorKey = ({ groupA, groupB, groupC, groupD }) => {
  const keySorted =
    groupA || groupB || groupC || groupD ? (
      <div className="color-key-item">
        <div className="ColorKey__Box ColorKey__Sorted"></div>
        <span>Sorted</span>
      </div>
    ) : (
      <div className="color-key-item">
        <div className="ColorKey__Box ColorKey__Unsorted"></div>
        <span>Unsorted</span>
      </div>
    )

  const keyA = groupA && (
    <div className="color-key-item">
      <div className="ColorKey__Box ColorKey__GroupA"></div>
      <span>{groupA}</span>
    </div>
  )

  const keyB = groupB && (
    <div className="color-key-item">
      <div className="ColorKey__Box ColorKey__GroupB"></div>
      <span>{groupB}</span>
    </div>
  )

  const keyC = groupC && (
    <div className="color-key-item">
      <div className="ColorKey__Box ColorKey__GroupC"></div>
      <span>{groupC}</span>
    </div>
  )

  const keyD = groupD && (
    <div className="color-key-item">
      <div className="ColorKey__Box ColorKey__GroupD"></div>
      <span>{groupD}</span>
    </div>
  )

  return (
    <div className="sort-color-key">
      {keySorted}
      {keyA}
      {keyB}
      {keyC}
      {keyD}
    </div>
  )
}

export default SortColorKey
