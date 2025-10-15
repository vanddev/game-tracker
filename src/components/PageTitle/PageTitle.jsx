import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const PageTitle = ({ title }) => {
    let navigate = useNavigate();
    return (
        <h1 className='page-title'><Link onClick={() => navigate(-1)} ><ArrowLeft/></Link>{ title }</h1>
    );
}

export default PageTitle;