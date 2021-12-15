import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table'

export default function ContentWrapper() {
    return (
        <div>
            <TopBar />
            <ContentRowTop />
            <Table />
            <Footer />
        </div>
    )
}