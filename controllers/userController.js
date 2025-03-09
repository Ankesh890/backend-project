exports.getUsers = async (req, res) => {
    const users = await User.find({}, '-password');
    res.json(users);
};

 exports.updateProfile = async (req,res) => {
    const{ name,email } = req.body;
    const updateUser = await User.findByIdAndUpdate(req.user.id, {name,email}, {new: true });
    res.json(updatedUser);
};

exports.deleteprofile = async (req,res) => {
    await Useractivation.findByIdAndDelete(req.user.id);
    res.json({ message: 'profile deleted'});
};
