import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <h1>About</h1>
            <Link to='/'>
                <p>Back to home</p>
            </Link>
        </Card>
    )
}

export default AboutPage
