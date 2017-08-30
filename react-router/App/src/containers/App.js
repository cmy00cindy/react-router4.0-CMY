import React from 'react'
import { render } from 'react-dom'
import { NavLink, Link } from 'react-router-dom'



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to="/comment2">
                Comment2
           </Link>
              <ul>
                <li>
                  <Link to="/comment2/4">
                    Comment3
              </Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/good"
                activeClassName="selected"
                activeStyle={{ fontWeight: 'bold', color: 'green' }}>
                green</NavLink></li>
          </ul>
        </div>
        <div style={{ border: '1px solid red' }}>
          {this.props.children}
        </div>
      </div>
    )
  }

}
export default App;


// 注意:如果页面中用Link的话，那么引用就不能 import{ Link} from 'react-router'
// 要 import { NavLink,Link } from 'react-router-dom'




// class App extends React.Component {
//   render() {
//     const { state, actions } = this.props;
//     return (
//       <Provider store={store}>
//         <RootContainer />
//       </Provider>
//     );
//   }
// }

// export default connect(
//   (state) => ({
//     state: state.reducer
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(screenActions, dispatch)
//   })
// )(App);