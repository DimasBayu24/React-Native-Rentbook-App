import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register, login} from '../Redux/actions/users';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const mapStateToProps = user => {
  return {
    user,
  };
};

class Login extends Component {
  state = {
    registerLogin: true,
    username: '',
    password: '',
  };

  registerId = () => {
    const {username, password} = this.state;
    const user = {
      username,
      password,
    };
    this.props.dispatch(register(user));
    this.state.registerLogin = true;
  };

  loginId = () => {
    const {username, password} = this.state;
    const user = {
      username,
      password,
    };
    this.props.dispatch(login(user, this.props.navigation));
  };

  buttonLogin = () => {
    this.loginId();
  };

  buttonRegister = () => {
    this.registerId();
  };

  LoginState = () => {};

  render() {
    return (
      <View style={style.container}>
        <Text style={style.headerLogin}>Here to Get Welcomed!</Text>
        {this.state.registerLogin ? (
          <TextInput
            style={style.email}
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            placeholder="email"
          />
        ) : (
          <TextInput
            style={style.email}
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            placeholder="email"
          />
        )}
        {this.state.registerLogin ? (
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            secureTextEntry={true}
            style={style.password}
            placeholder="password"
          />
        ) : (
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            secureTextEntry={true}
            style={style.password}
            placeholder="password"
          />
        )}
        <View style={style.flexSignIn}>
          {this.state.registerLogin ? (
            <Text style={style.signIn}>Sign In</Text>
          ) : (
            <Text style={style.signIn}>Sign Up</Text>
          )}
          {this.state.registerLogin ? (
            <TouchableOpacity onPress={this.buttonLogin}>
              <View style={style.arrow}>
                <Icon name="arrow-right" size={25} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.buttonRegister}>
              <View style={style.arrow}>
                <Icon name="arrow-right" size={25} />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={style.flexSignUp}>
          <TouchableOpacity
            onPress={() =>
              this.setState({registerLogin: !this.state.registerLogin})
            }>
            {this.state.registerLogin ? (
              <Text style={style.signUp}>Sign Up</Text>
            ) : (
              <Text style={style.signUp}>Back to Sign In</Text>
            )}
          </TouchableOpacity>
          {this.state.registerLogin ? (
            <TouchableOpacity>
              <Text style={style.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          ) : (
            <Text> </Text>
          )}
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Login);

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: '9%',
  },
  headerLogin: {
    fontSize: 36,
    paddingTop: '28%',
  },
  email: {
    borderBottomWidth: 1,
  },
  password: {
    borderBottomWidth: 1,
  },
  flexSignIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  signIn: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 50,
  },
  flexSignUp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUp: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  forgotPassword: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
