import Page from '../layouts/page';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import HabitList from '../components/habitlist';
import { DB } from '../lib/db';

const Habits = () => (
  <Page>
    <p>Habits page</p>
    <div className="form-group">
      <label className="form-label" for="input-example-1">
        Name
      </label>
      <input
        className="form-input"
        type="text"
        id="input-example-1"
        placeholder="Name"
      />
    </div>
    <HabitList />
  </Page>
);

export default withRedux(initStore, null, null)(Habits);
