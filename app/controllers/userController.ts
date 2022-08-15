import { Request, Response } from "express";
import indexOperation from '../operations/users/indexOperation';

export const index = async (request: Request, response: Response) => {
  const operation = new indexOperation(request);
  await operation.call();
  
  if ( operation.error == null ) {
    response.success(operation.users);
  } else {
    response.error(operation.error);
  }
    
  // console.log(request.body);
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }
  //
  // // Create a Tutorial
  // const tutorial = {
  //   title: req.body.title,
  //   description: req.body.description,
  //   published: req.body.published ? req.body.published : false
  // };
  //
  // // Save Tutorial in the database
  // Tutorial.create(tutorial)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the Tutorial."
  //     });
  //   });
};
