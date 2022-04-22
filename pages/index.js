import { useRouter } from 'next/router';

import Card from '../components/ui/Card';

function Home() {
  const router = useRouter();

  return (
    <div className='flex bg-[url("/1.gif")] bg-cover'>
      <div className='h-[700px] cursor-pointer basis-1/3 text-center'>
        {/* <Card>about</Card> */}
      </div>
      <div  className='h-[700px] cursor-pointer basis-1/3 text-center' onClick={() => { router.push('/gallery') }}>
        {/* <Card>gallery</Card> */}
      </div>
      <div className='h-[700px] cursor-pointer basis-1/3 text-center'>
        {/* <Card>contact</Card> */}
      </div>
    </div>
  )
}

export default Home;
