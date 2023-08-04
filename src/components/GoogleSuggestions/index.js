// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {isTyping: ''}

  updateSearchInput = text => {
    this.setState({
      isTyping: text,
    })
  }

  onChangeSearchInput = event => {
    this.setState({isTyping: event.target.value})
  }

  render() {
    const {isTyping} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(everyItem =>
      everyItem.value.toLowerCase().includes(isTyping.toLowerCase()),
    )

    return (
      <div className="flex-container">
        <div className="container-shadow-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="img-height"
          />

          <div className="input-container">
            <div className="input-container-inside-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
                className="image-search-icon"
              />
              <input
                type="search"
                placeholder="Google Search"
                className="input-width"
                onChange={this.onChangeSearchInput}
                value={isTyping}
              />
            </div>
            <ul>
              {searchResults.map(everyItem => (
                <SuggestionItem
                  details={everyItem}
                  key={everyItem.id}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
