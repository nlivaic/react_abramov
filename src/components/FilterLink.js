import React from "react";
import { NavLink } from "react-router-dom";

// const FilterLink = ({ store, filter, children }) => {
//   return (
//     <Link
//       filter={filter}
//       isActive={filter === store.getState().visibilityFilter}
//       onFilterClick={filter =>
//         store.dispatch({
//           type: "SET_VISIBILITY_FILTER",
//           filter
//         })
//       }
//     >
//       {children}
//     </Link>
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   filter: ownProps.filter,
//   isActive: ownProps.filter === state.visibilityFilter
// });

// const mapDispatchToProps = dispatch => ({
//   onFilterClick: filter => dispatch(setVisibilityFilter(filter))
// });

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link);

const FilterLink = ({ filter, children }) => {
  return (
    <NavLink
      exact
      to={"/" + (filter === "all" ? "" : filter)}
      activeStyle={{ textDecoration: "none", color: "black" }}
    >
      {children}
    </NavLink>
  );
};

export default FilterLink;
