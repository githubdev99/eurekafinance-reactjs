import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { changeTitlePage } from './actions/config';

function App(props) {
  return (
    <div>
      <Helmet>
        <title>{props.titlePage}</title>
      </Helmet>
      <button onClick={() => props.changeTitlePage('abc')}>coba klik dah!!!</button>
    </div>
  );
}

const mapStateToProps = state => ({
  titlePage: state.titlePage
})

const mapDispatchToProps = {
  changeTitlePage: changeTitlePage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
