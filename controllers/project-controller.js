import {Projects} from '../models/projects.js'

// const getAllProjects = async (req, res) => {
//     const projects = await Projects.findAndCountAll();
//     res.json({ status: true, data: projects });
//   };

export function getAllProjects(req,res){
  Projects.findAndCountAll().then(projects => {
    console.log('proyectos:', projects)
    res.json({ status: true, data: projects });
  });
}
