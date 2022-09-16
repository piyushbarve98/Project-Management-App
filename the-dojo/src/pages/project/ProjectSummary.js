import React from 'react'
import Avatar from '../../components/Avatar'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function ProjectSummary({project}) {
    
    const {user} = useAuthContext()
    const {deleteDocument} = useFirestore('projects')
    const handleClick = () =>{
        deleteDocument(project.id)
    }
    return (
    <div>
        <div className='project-summary'>
            <h2 className='page-title'>{project.name}</h2>
            <p className='due-date'>
                Project due by {project.dueDate.toDate().toDateString()}
            </p>
            <p className='details'>
                {project.details}
            </p>
            <h4>Project is assigned to: </h4>
            <div className='assigned-users'>
            {project.assignedUsersList.map(user =>(
                <div key={user.id}>
                    <Avatar  src = {user.photoURL} />
                </div>
            ))}
            </div>
            {user.uid === project.createdBy.id && (
            <button className='btn' onClick={handleClick}>Delete</button>
            )}
            </div>
    </div>
  )
}
