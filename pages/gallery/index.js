import WorksList from '../../components/works/WorksList';
import Layout from '../../components/layout/Layout';
import { Fragment } from 'react';

const DUMMY_WORKS = [
    {
        id: 'w1',
        title: 'Azerbaijan State Conservatory',
        description: 'This model is for ASC',
        image: 'https://cdn.rt.emap.com/wp-content/uploads/sites/4/2016/01/18125257/3XN-QQS-2-1.jpg',
        year: '2017'
    },
    {
        id: 'w2',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://www.lasermodeling3.com/sites/default/files/Stock%204.jpg',
        year: '2003'
    },
    {
        id: 'w3',
        title: 'Azerbaijan State Filarmony',
        description: 'This model is for ASF',
        image: 'https://media.wired.com/photos/5926b4a78d4ebc5ab806b33a/master/w_1600,c_limit/Alberta_Museum.jpg',
        year: '2014'
    },
];

function Gallery() {
    return (<Fragment>
        Gallery
        <WorksList works={DUMMY_WORKS}/>
    </Fragment>);
}

export default Gallery;