import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = (event) => {
		//Collect the value entered by user in the search bar
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		//Stop the form from submitting as soon as the user hits enter
		event.preventDefault();
	};
	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
