import React from 'react'
import Projectcards from './Projectcards';


const PROJECT_DATA = [
  {
    id:1,
    title: 'React Portpolio Website',
    description:'Project Description',
    image:'/pro1a.jpg',
    tag:['All','Web']
  },
  {
    id:2,
    title: 'Next.js Portpolio Website',
    description:'Project Description',
    image:'/pro2a.jpg',
    tag:['All','Web']
  },
  {
    id:3,
    title: 'E-commerce Website',
    description:'project Description',
    image:'/pro3a.jpg',
    tag:['All','Web']
  },
  {
    id:4,
    title: 'React Application',
    description:'Project Description',
    image:'/pro4a.jpg',
    tag:['All','Web']
  },
  {
    id:5,
    title: 'Elearn.io Application',
    description:'Project Description',
    image:'/pro5a.jpg',
    tag:['All','Web']
  },

];


const Projectsection = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-0 pb-0  mb-0 md:gap-28 lg:py-0 xl:flex-col  ">
              <h1 className="bold-52 lg:bold-88 text-center my-4 ">
                My Projects </h1>
                
                <div className='grid md:grid-col-4 gap-8 md:gap-12'>
                  {PROJECT_DATA.map((project)=> (<Projectcards key={project.id} title={project.title} description={project.description} imgurl={project.image}/>))}
                </div>
                </section>
  )
}

export default Projectsection