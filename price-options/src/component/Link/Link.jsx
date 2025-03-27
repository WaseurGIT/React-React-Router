import PropTypes from "prop-types";

const Link = ({route}) => {
  return (
    <li className="mr-5 hover:bg-amber-500 px-6">
      <a href={`${route.path}`}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;
