import React from 'react';
import {connect} from 'react-redux';
import AppActions from './actions';

class App extends React.Component {
    componentDidMount() {
        this.props.getServerData();
    }
    render()  {
        return(
            <div>
                <h1>Check console to see server return value</h1>
                <p>{this.props.data}</p>
            </div>
        )}
}

const mapStateToProps = (state) => ({
    data: state.app.get('data')
});

const mapDispatchToProps = (dispatch) => {
    return {
        getServerData: () => {
            dispatch(AppActions.getServerData())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

