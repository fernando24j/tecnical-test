import pkg from 'mongoose';
const { Schema, models, model, Types } = pkg;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "the name is required"],
    },
    email: {
      type: String,
      required: [true, "the email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "the password is required"],
    },
    google: {
      type: Boolean,
      default: false,
    },
    condition: {
      type: Boolean,
      default: true,
    },
    rol: {
      type: Schema.Types.ObjectId,
      ref: "Rol",
      required: [true, "the rol is required"],
    },
    master: {
      type: Boolean,
      default: false,
    },
    tercero: {
      type: Schema.Types.ObjectId,
      ref: "Tercero",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Pending"],
      default: "Pending",
    },
    confirmationCode: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const User = models.User || model("User", UserSchema);


const RestrictionsSchema = new Schema(
  {
    invLimit: {
      type: Number,
      required: [true, "the inventory limit is required"],
      default: 1000,
    },
    usersLimit: {
      type: Number,
      required: [true, "the users limit is required"],
      default: 10,
    },
    formulationsLimit: {
      type: Number,
      required: [true, "the formulations limit is required"],
      default: 30,
    },
    itemLimit: {
      type: Number,
      required: [true, "the item limit is required"],
      default: 1500,
    },
    rolesLimit: {
      type: Number,
      required: [true, "the roles limit is required"],
      default: 5,
    },
    equipmentLimit: {
      type: Number,
      required: [true, "the equipment limit is required"],
      default: 5000,
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
    accountTier: {
      type: Number,
      required: [true, "the account tier is required"],
      default: 1,
    },
    modules: {
      inventories: {
        type: Boolean,
        default: true,
      },
      equipments: {
        type: Boolean,
        default: true,
      },
    },
    tercero: {
      type: Schema.Types.ObjectId,
      ref: "Tercero",
      required: [true, "the tercero is required"],
    },
    agentCode: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const Restrictions = models.Restrictions || model("Restrictions", RestrictionsSchema);


const CompanyInfosSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      required: [true, "the phone number is required"],
    },
    tercero: {
      type: Schema.Types.ObjectId,
      ref: "Tercero",
      required: [true, "the tercero is required"],
    },
    TIN: {
      type: String,
      required: [true, "the TIN is required"],
    },
    address: {
      type: String,
      required: [true, "the address is required"],
    },
    name: {
      type: String,
      required: [true, "the company name is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const CompanyInfos = models.CompanyInfos || model("CompanyInfos", CompanyInfosSchema);
