import React from 'react'
import './Dashboard.css'
import { useState } from 'react'
import {useCollection} from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'

function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState('all')
  const {documents, error} = useCollection('projects')

  const changeFilter = (newFilter) =>{
    setCurrentFilter(newFilter)
  }

  const projects = documents.filter(() =>{
    
  })
  return (
    <div>
      <h2 className='page-title'> Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectFilter currentFilter ={currentFilter} changeFilter={changeFilter}/>}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}

export default Dashboard