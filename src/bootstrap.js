module.exports = async () =>{
    const Tweet = require('./models/Tweet');
    const User = require('./models/User');

    User.hasMany(Tweet,{
            as:"Tweets",
            foreignKey:"userId"
    })

    Tweet.belongsTo(User,{
            as:"User",
            foreignKey:"userId"
    })


    const handleErr = (err) =>{
        console.log(err)
    }

    const user = await User.create({
        username:"huydz",
        password:"123456",
    }).catch(handleErr);

    const tweet = await Tweet.create({
        content:"Huy dz vcl",
        userId:user.id,
    }).catch(handleErr);

    const users = await User.findAll({
        where: {
            username:"huydz"
        },
        include:[
            {
                model:Tweet,
                as:"Tweets"
            }
        ]
    }).catch(handleErr)

    console.log(users);
}