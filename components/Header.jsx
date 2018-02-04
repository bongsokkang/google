
var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <header className='py2'>
        <h1 className='mt0'>{this.props.title}</h1>
        <div className='mxn2'>
          <Link to='/' className='button button-transparent'>Index</Link>
          <Link to='/about' className='button button-transparent'>About</Link>
          <Link to='/about1' className='button button-transparent'>About1</Link> 
          <Link to='/about2' className='button button-transparent'>About2</Link>
          <Link to='/Card' className='button button-transparent'>Card</Link> 
        </div>
      </header>
    )
  }
})

module.exports = Header

