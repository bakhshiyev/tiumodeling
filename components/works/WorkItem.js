import styles from './WorkItem.module.css';

const WorkItem = (props) => {
    return (<li>
        <div className={styles.image}>
            <img src={props.work.image} />
        </div>
    </li>);
};

export default WorkItem;