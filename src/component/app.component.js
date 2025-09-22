import React, { Component } from "react";
import "./app.component.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      passwordVisible: false,
      email: '',
      password: ''
    };
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      passwordVisible: !prevState.passwordVisible
    }));
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }));
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    
    console.log('Email:', email);
    console.log('Password:', password);
    alert(`Вход выполнен! Email: ${email}`);
  }

  render() {
    const { theme, passwordVisible, email, password } = this.state;

    return (
      <div className={`app ${theme}-theme`}>
        <button 
          className="theme-toggle" 
          onClick={this.toggleTheme}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        <div className="auth-container">
          <div className="auth-header">
            <h2>Вход в систему</h2>
          </div>
          
          <form className="auth-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Электронная почта</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={email}
                onChange={this.handleInputChange}
                placeholder="Введите ваш email" 
                required 
              />
            </div>
            
            <div className="form-group password-toggle">
              <label htmlFor="password">Пароль</label>
              <input 
                type={passwordVisible ? "text" : "password"} 
                id="password" 
                name="password"
                value={password}
                onChange={this.handleInputChange}
                placeholder="Введите ваш пароль" 
                required 
              />
              <span 
                className="toggle-password" 
                onClick={this.togglePasswordVisibility}
              >
                {passwordVisible ? '🔒' : '👁️'}
              </span>
            </div>
            
            <button type="submit" className="btn">Войти</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;