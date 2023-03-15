import './index.css'

const Feedback = props => {
  const {resources} = props
  const {emojis, loveEmojiUrl} = resources
  const {id, name, imageUrl} = emojis

  const displayFeedback = () => {
    ;<div>
      <img src={loveEmojiUrl} alt="loveEmojiUrl" />
      <h1>Thank You</h1>
      <p>
        We will use your feedback to improve our customer support performance.
      </p>
    </div>
  }

  return (
    <div className="container">
      <div className="content-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="icon-container">
          {emojis.map(eachItem => (
            <li>
              <img
                src={eachItem.imageUrl}
                alt={eachItem.name}
                className="icon"
                onClick={displayFeedback}
              />
              <p>{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Feedback
