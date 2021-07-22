import { Request, Response } from "express";

/**
 * This function comment is parsed by doctrine
 * @route GET /users
 * @group foo - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
 var id=3;
 var list=[{"id":1,"name":"Batman","email":"batman@heroes.com1"},{"id":2,"name":"Superman","email":"superman@heroes.com"}]
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json(list);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Internal server error");
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);

  list.forEach((item) => {
  if( item.id==id) return res.status(200).json(item);
});
  return res.status(200).json({});
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  var k = req.body
  k.id=id;
  id++;
  console.log(k)
list.push(k)
  res.json({
    message: "User Added successfully",
    body: {
      user: k,
    },
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;


    list.forEach((item) => {
    if( item.id==id) return item =req.body;
  });
  res.json("User Updated Successfully");
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  var count=0
  var found=-1;
  list.forEach((item) => {
    if( item.id==id) found=count;
    count++

});
if(found!=-1){
  list.splice(found, 1);
  res.json(`User ${id} deleted Successfully`);
}
else{
  res.json(`User ${id} not deleted`);
}
};
