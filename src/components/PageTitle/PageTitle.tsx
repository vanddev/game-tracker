import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageTitleProps {
    title: string;
}

function PageTitle({ title } :  PageTitleProps) {
    return (
        <h1 className='page-title'><Link to={-1 as any}><ArrowLeft/></Link>{ title }</h1>
    );
}

export default PageTitle;