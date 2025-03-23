import { gql } from "@apollo/client"; // Import the gql function from Apollo Client to define GraphQL queries
import client from "client"; // Import the Apollo Client instance to interact with the GraphQL API

// Page Component (Home)
// This is the default exported component for the Next.js page
// It receives props from getStaticProps and renders content
export default function Home(props) {
	console.log("PROPS:", props);
	return <div>My website.</div>;
}

/* 
	The getStaticProps is a built-in Next.js function used for Static Site Generation (SSG)
	It allows for fetching data at build time and pass it as props to a page component
	This function runs at build time and fetches data from the GraphQL API
	The data is passed as props to the Home component
*/
export const getStaticProps = async () => {
	// The client.query function is used to send a GraphQL query using Apollo Client
	const { data } = await client.query({
		// Use a tagged template literal (gql function from the Apollo library)
		// To grab the title of every page (testing example)
		query: gql`
			query NewQuery {
				pages {
					nodes {
						title
					}
				}
			}
		`
	});

	// Return the fetched data as props for the page
	// Next.js will use this at build time to generate a static HTML page
	return {
		props: {
			data, // Pass the fetched GraphQL data as a prop
			myexampleprop: "test"
		}
	}
}