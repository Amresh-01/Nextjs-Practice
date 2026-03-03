import mongoose,{Schema,Document} from "mongoose"; 
// Document isliye lagega because Typescript use ho rahi hai


export interface Message extends Document{
  content: string; // ye interface structure bta rha hai ki kaise aage use hoga.
  createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    required:true,
    default:Date.now
  }
})


export interface User extends Document{
  username: string; 
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified:boolean;
  isAcceptingMessage: boolean;
  messages: Message[]
}


const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required:[true,"User name is required"],
    trim: true,
    unique:true
  },
  email: {
    type: String,
    required:[true,"Email is required"],
    unique:true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please use a Valid email address"]
  },
  password: {
    type: String,
    required:[true,"Password is Required"],
  },
  verifyCode: {
    type: String,
    required:[true,"VerifyCode is required"],
  },
  verifyCodeExpiry:{
    type: Date,
    required:[true,"VerifyCodeExpiry is required"]
  },
  isVerified:{
    type:Boolean,
    default: false,
  },
  messages:[MessageSchema]
})

const UserModel=(mongoose.models.User as mongoose.Model<User>) || mongoose.model("User",UserSchema)

export default UserModel;