import { homePageData } from './data.js';

export function load() {
	return {
		homepage_links_and_search_links: homePageData.data.homepage_links_and_search.links.map((el) => ({
			content: el.content,
			web_url: el.web_url 
		}))
	};
}