import axios from 'axios';

const KEY = 'AIzaSyD_bWg8gumjbdlxRbDFssWpSYTwqFWgoo8';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
