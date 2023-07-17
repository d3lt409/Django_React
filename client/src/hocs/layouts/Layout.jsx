import { connect } from "react-redux";

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

const mapStateToProp = state => ({});

export default connect(mapStateToProp, {})(Layout);
