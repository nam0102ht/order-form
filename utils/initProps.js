import Cookies from "cookies"

async function getInitialProps({ req, res }) {
	if (!process.browser) {
		try {
			const cookies = new Cookies(req, res)
			const authToken = cookies.get('token') || ''

			const { data } = await axios
				.get(`${API_URL}/me`, { headers: { 'token': authToken } })
				.then((response) => response.data)

			return { initialLoginStatus: `Logged in as ${email}` }
		} catch (err) {
			return { initialLoginStatus: 'Not logged in' }
		}
	}

	return {}
}

export default getInitialProps