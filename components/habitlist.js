import { connect } from 'react-redux';
import { DB } from '../lib/db';
import { bindActionCreators } from 'redux';
import { habitsReceived } from '../store';

const db = new DB();

class HabitList extends React.Component {
  componentWillMount() {
    const { habitsReceived } = this.props;
    db.getHabits(habits => {
      habitsReceived(habits);
    });
  }

  render() {
    const { habits } = this.props;
    return (
      <div>
        <p>habit list</p>
        {habits.map(habit => (
          <p>
            {habit.title} //
            {habit.description}
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ habits }) => ({ habits });
const mapDispatchToProps = dispatch => ({
  habitsReceived: bindActionCreators(habitsReceived, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HabitList);
