import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'
import Loading from 'src/components/Loading'

const LoadableComponent = Loadable({
    loader: () => import('./Main'),
    loading: () => (<div></div>)
})

class App extends Component {
    render () {
        return (
            <div>
                <Loading isLoading={this.props.isLoading} />
                <LoadableComponent />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isLoading: state.app.isLoading }
}

export default connect(mapStateToProps)(App)