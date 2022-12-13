import './form-comment.styles.scss';

const FormComment = () => {
  return (
    <form action="" className="comment__form">
      <div className="comment__wraper">
      <input type="text" className="comment__input" placeholder="name"/>
        <input type="text" className="comment__input" placeholder="email"/>
        <input type="text" className="comment__input" placeholder="phone"/>
      </div>
      <textarea className="comment__text" name="comment" id="comment" cols="30" rows="5" placeholder="comment"></textarea>
      <button className="btn btn-primary">post comment</button>
    </form>
  )
}

export default FormComment;