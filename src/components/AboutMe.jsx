import React from 'react'

const AboutMe = () => {
  return (
    <section className='grid grid-cols-2 justify-around my-7 p-7 bg-white rounded-3xl shadow-xl'>
        <div>
            <h2 className='text-3xl font-bold mb-4'>About me</h2>
            <p className=''>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat recusandae quisquam ipsum voluptas facere earum, cum asperiores commodi quaerat rem, optio reprehenderit eveniet ab! Necessitatibus aliquid incidunt accusantium? Impedit, earum.
                Maxime nobis veniam quidem reiciendis provident possimus esse iste, quibusdam neque dolorum eveniet ullam quod repudiandae magnam tempore nihil? Aliquam aliquid minus sint iure hic saepe, officia vero enim qui?
                Saepe deserunt minus consequuntur tenetur ex laborum sed vel dolores, numquam delectus, amet molestiae. Recusandae, at. Dolorem cumque quae eius fugiat soluta corrupti, autem quis fugit excepturi quam mollitia cupiditate!
            </p>
        </div>
        <div className=''>
            <img className='mx-auto' src="https://imgs.search.brave.com/olcx29M-asPkl4wnVLR-O2es8CpVdSDTo_WfB9fPFRw/rs:fit:216:300:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5LzRl/L2ZkL2U5NGVmZGFm/ZDA0MzNiZWVjNGFh/OWNiMmMwZTI4NThi/LnBuZw" alt="" />
        </div>
    </section>
  )
}

export default AboutMe