import './home.css';
import Products from './../products/Products';
import Sidebar from './../sidebar/Sidebar';

function Home() {
    return (
        <>
            <div className="row">
                <div className='col-md-4'>
                    <Sidebar />
                </div>
                <div className='col-md-8'>
                    <Products />
                </div>
            </div>
        </>
    );
}

export default Home;