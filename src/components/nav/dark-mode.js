import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "./darkToggle.css"



export default class MyComponent extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <> 
            <label
            className="switch"
            
            >
            <input
              // className="react-switch-checkbox"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
        
        <span className={`slider`} />
      </label>
      </>
        )}
      </ThemeToggler>
    )
  }
}

