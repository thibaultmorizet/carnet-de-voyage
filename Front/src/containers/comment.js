import { connect } from 'react-redux';
import { changeValueComment, sendComment } from 'src/actions/comment';
import Comment from 'src/components/Travel/comments';

const mapStateToProps = (state) => ({
  comment: state.comment.message,
  oldComment: state.travel.currentComment,
});

const mapDispatchToProps = (dispatch) => ({
  changeValueComment: (value, name) => {
    dispatch(changeValueComment(value, name));
  },
  sendComment: () => {
    dispatch(sendComment());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
