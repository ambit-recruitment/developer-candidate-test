import { useDispatch } from 'react-redux';
import { applyFilter } from './store';

function FilterButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => {
        dispatch(applyFilter(props.name));
      }}
    >
      <span>{props.name}</span>
    </button>
  );
}

export default FilterButton;
