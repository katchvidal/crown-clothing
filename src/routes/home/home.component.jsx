import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';


const Home = () => {
    return (
        < div >
            <Outlet />
            <div>
                <Directory />
            </div>
        </ div >

    );
}

export default Home;
