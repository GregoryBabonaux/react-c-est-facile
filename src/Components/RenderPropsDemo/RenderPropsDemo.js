import React, {Component} from 'react'

class Fetching extends Component{
  state = {
    data: null,
    loading: false
  }

  fetchData = () => {
    fetch(this.props.url).then((results) => {
      return results.json()
    })
    .then( (data) => {
      this.setState({
        data,
        loading: false
      })
    })
  }

  componentDidMount(){
    this.fetchData()
    this.setState({
      loading: true
    })
  }

  render(){
    return this.props.render(this.state)
  }
}

const RenderPropsDemo = () => (
  <div> 
    <h2>Because Chuck Norris.</h2>
    <Fetching
      url="https://api.chucknorris.io/jokes/search?query=god"
      render={({data, loading}) => (
          <div>
            {loading && <span>Chargement</span>}
            <ul>
              {
                data !== null && data.result.map( (fact) => {
                  return <li key={fact.id}>
                    {fact.value}
                  </li>
                })
              }
            </ul>
          </div>
      )} />
    <hr />
    <h2>Because... me</h2>
    <Fetching
      url="http://api.icndb.com/jokes/random/10?firstName=Gregory&lastName=BABONAUX"
      render={({data, loading}) => (
          <div>
            {loading && <span>Chargement</span>}
            <ul>
              {
                data !== null && data.value.map( (fact) => {
                  return <li key={fact.id}>
                    {fact.joke}
                  </li>
                })
              }
            </ul>
          </div>
      )} />
  </div>
)

export default RenderPropsDemo;