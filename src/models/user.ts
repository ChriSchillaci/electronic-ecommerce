import { Model, model, Schema } from "mongoose";
import { SchemaUser } from "@/types/schemaTypes";

const userSchema = new Schema<SchemaUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
});

let User: Model<SchemaUser>;
try {
  User = model<SchemaUser>("User");
} catch {
  User = model<SchemaUser>("User", userSchema);
}

// const User: Model<SchemaUser> =
//   models.User || model<SchemaUser>("User", userSchema);

export default User;
