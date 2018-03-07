import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};



class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);

  }//constructor

  //event handlers

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event){
    this.setState({term:event.target.value});
  }//Search Businesses input

  handleLocationChange(event){
    this.setState({location:event.target.value});
  }//Where? input

  //utils
  getSortByClass(sortByOption){
    return sortByOption === this.state.sortBy ? 'active' : '';
  }
  //renderers
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
                  className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange}
                >{sortByOption}</li> ;
    });//array.map() returning li from what was initially an object
  }

  render() {
    return (
      <div className ="SearchBar">

        <p className="debug-p">
          Term: {this.state.term}<br/>
          Location: {this.state.location}
        </p>

        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}//class SearchBar

export default SearchBar;
