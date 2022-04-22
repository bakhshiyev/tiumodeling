import WorkItem from './WorkItem';

const WorksList = (props) => {
    return (<div>
        <ul className='flex flex-wrap'>
            {props.works.map(workItem => <WorkItem work={workItem} />)}
        </ul>
    </div>);
};

export default WorksList;