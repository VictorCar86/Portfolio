import React from 'react'
import InfoSection from '../components/InfoSection'

const AboutMe = () => {
  return (
    <InfoSection title="About me 👋">
      <div className='grid grid-cols-1 md:grid-cols-2 justify-around gap-6'>
        <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate consequatur laborum saepe voluptate nihil, sed repellendus ab harum non earum voluptas molestias quisquam delectus dignissimos! Obcaecati nesciunt assumenda dolores.
            Repellat veniam quis eius quaerat, non debitis tempore doloribus iusto, laudantium consectetur hic sit blanditiis rem. Expedita architecto quae iste eligendi numquam ipsa tempora atque vero dolorum, natus nihil iusto!
        </p>
        <img className='mx-auto' src="https://imgs.search.brave.com/olcx29M-asPkl4wnVLR-O2es8CpVdSDTo_WfB9fPFRw/rs:fit:216:300:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5LzRl/L2ZkL2U5NGVmZGFm/ZDA0MzNiZWVjNGFh/OWNiMmMwZTI4NThi/LnBuZw" alt="" />
      </div>
    </InfoSection>
  )
}

export default AboutMe