import UserModel from'../models/UserModel.js';

const createUser = async (req, res) => {
    const { body } = req;

    if (!body.email || !body.name || !body.address) {
        return res.status(400).json({
        message: 'You send wrong datas!',
        data: null,
        });
    }

    try {
        await UserModel.createNewUser(body);
        res.status(201).json({
        message: 'create new users success',
        data: body,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
        });
    }
};

const getAllUsers = async (_, res) => {
    try {
      const [data] = await UserModel.getAllUsers();
      res.json({
        message: 'GET all users success',
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  };

  const getUserById = async (req, res) => {
    const { idUser } = req.params;
    try {
        const [data] = await UserModel.getUserById(idUser);
        res.json({
          message: 'GET user success',
          data: data[0],
        });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  };

  const updateUser = async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
  
    try {
      await UserModel.updateUser(body, idUser);
      res.json({
        message: 'Update users success ',
        data: { id: idUser, ...body },
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  };

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {
      await UserModel.deleteUser(idUser);
      res.json({
        message: 'delete berhasil',
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  };
  
export default {createUser, getAllUsers, getUserById, updateUser, deleteUser};
