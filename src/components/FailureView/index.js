import './index.css'

const FailureView = props => {
  const {onClickTryAgin} = props

  const onClickTry = () => {
    onClickTryAgin()
  }

  return (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dbij4wrw1/image/upload/v1668257782/MiniProject/Group_7522something_went_wrong_xdcjpq.png"
        alt="failure view"
        className="book-item-failure-image"
      />
      <p className="book-item-failure-message">
        Something went wrong. Please try again
      </p>
      <button type="button" className="try-again-button" onClick={onClickTry}>
        Try Again
      </button>
    </div>
  )
}

export default FailureView
