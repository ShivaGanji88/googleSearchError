// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestList, updateItem} = props
  const {value} = suggestList

  const onClickSuggest = () => {
    updateItem(value)
  }

  return (
    <li className="list-items">
      <p className="para">{value}</p>
      <button type="button" className="button" onClick={onClickSuggest}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image-arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
