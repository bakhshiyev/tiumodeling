import WorksList from '../../components/works/WorksList';
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYHyJc-o5JZRHjBI1up9Agdz3IcU7szXBjQ&usqp=CAU',
        year: '2003'
    },
    {
        id: 'w3',
        title: 'Azerbaijan State Filarmony',
        description: 'This model is for ASF',
        image: 'https://media.wired.com/photos/5926b4a78d4ebc5ab806b33a/master/w_1600,c_limit/Alberta_Museum.jpg',
        year: '2014'
    },
    {
        id: 'w4',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGb-u7uax1rrXQBMP8auaX8rcYxiFZxxkXw&usqp=CAU',
        year: '2003'
    },
    {
        id: 'w5',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://www.lasermodeling3.com/sites/default/files/Stock%204.jpg',
        year: '2003'
    },
    {
        id: 'w6',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://images.squarespace-cdn.com/content/v1/50acf0d8e4b04170ccaeae6e/1394996158331-L3VKX09PM3OWOLIO2YHO/Ivey+015.jpg?format=2500w',
        year: '2003'
    },
    {
        id: 'w7',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://i.pinimg.com/originals/52/2d/2c/522d2c2cc0f9b140a8ff2c006aab6ff9.jpg',
        year: '2003'
    },
    {
        id: 'w8',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://images.adsttc.com/media/images/5bcc/d887/f197/cc4e/4000/00a0/newsletter/midiateca_PUC_-_SPBR.jpg?1540151426',
        year: '2003'
    },
    {
        id: 'w9',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/11_Sonnenhof_Rapperswil.jpg',
        year: '2003'
    },
    {
        id: 'w10',
        title: 'Azerbaijan State Conservatory',
        description: 'This model is for ASC',
        image: 'https://cdn.rt.emap.com/wp-content/uploads/sites/4/2016/01/18125257/3XN-QQS-2-1.jpg',
        year: '2017'
    },
    {
        id: 'w11',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYHyJc-o5JZRHjBI1up9Agdz3IcU7szXBjQ&usqp=CAU',
        year: '2003'
    },
    {
        id: 'w12',
        title: 'Azerbaijan State Filarmony',
        description: 'This model is for ASF',
        image: 'https://media.wired.com/photos/5926b4a78d4ebc5ab806b33a/master/w_1600,c_limit/Alberta_Museum.jpg',
        year: '2014'
    },
    {
        id: 'w13',
        title: 'Azerbaijan State Conservatory',
        description: 'This model is for ASC',
        image: 'https://cdn.rt.emap.com/wp-content/uploads/sites/4/2016/01/18125257/3XN-QQS-2-1.jpg',
        year: '2017'
    },
    {
        id: 'w14',
        title: 'Azerbaijan State Sanatorium',
        description: 'This model is for ASS',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYHyJc-o5JZRHjBI1up9Agdz3IcU7szXBjQ&usqp=CAU',
        year: '2003'
    },
    {
        id: 'w15',
        title: 'Azerbaijan State Filarmony',
        description: 'This model is for ASF',
        image: 'https://media.wired.com/photos/5926b4a78d4ebc5ab806b33a/master/w_1600,c_limit/Alberta_Museum.jpg',
        year: '2014'
    },
];

function Gallery() {
    return (<Fragment>
        <WorksList works={DUMMY_WORKS}/>
    </Fragment>);
}

export default Gallery;