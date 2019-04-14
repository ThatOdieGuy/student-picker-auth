import React from 'react';
import loginController from "../controllers/LoginController";

/**
 * This function wraps a component with our LoginController auth listener
 * If you wrap a component with this funciton, 
 *  it will provider the user as a property to your component
 * 
 * Whenever the user changes (login/login happens) then this prop will changed
 * 
 * Usage example:
 *  `function MyReactComponent(props) { return this.props.user && <div>{this.props.user.username}</div> }`
 *  `export default withUserAuth(MyReactComponent)`
 */
export default function withUserAuth(WrappedComponent) {
  return class UserAuthWrapper extends React.Component {
    state = { user: loginController.user }

    componentDidMount() {
      // Register to be notified when loginController.user changes
      loginController.addUserChangedListener(this.setUser);
    }
  
    componentWillUnmount() {
      // Unregister from this listener or else loginController will hold onto this dead component
      loginController.removeUserChangedListener(this.setUser);
    }

    setUser = (user) => {
      this.setState({ user });
    }

    render() {
      // the spread operator `...` here will re-apply our props to the WrappedComponent
      //  So that any props given to the UserAuthWrapper will be passed down to your WrappedComponent
      return <WrappedComponent {...this.props} user={this.state.user}/>
    }
  }
}