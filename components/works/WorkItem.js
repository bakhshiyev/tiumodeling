import { useRouter } from 'next/router';

const WorkItem = (props) => {
    const router = useRouter();

    return (<li className="relative basis-1/4">
        <img className="w-full h-full object-cover" src={props.work.image} />
        <div onClick={() => { router.push(`/gallery/${props.work.id}`) }} className="w-full h-full absolute top-0 left-0 right-0 bg-[#C6C2CD] opacity-0 transition-opacity ease-in-out hover:opacity-100 flex flex-col items-center justify-center">
            <h3 className="text-[#0e1117]"><b>{props.work.title}</b></h3>
            <p className="text-[#0e1117]"><i>{props.work.year}</i></p>
        </div>
    </li>);
};

export default WorkItem;