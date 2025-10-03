import pkg from 'mongoose';
const { Schema, models, model, Types } = pkg;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "the name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "the email is required"],
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "must have a password"],
    },
    picture: {
      type: String,
    },
    confirmationCode: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Active"],
      required: [true, "Must have an account status"],
    },
    superUser: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    isTemplate: {
      type: Boolean,
      default: false,
      required: true
    },
    environment: {
      type: Types.ObjectId,
      ref: "Environment",
    },
    subAdmin: {
      active: {
        type: Boolean,
        default: false,
      },
      environment: {
        type: Types.ObjectId,
        ref: "Environment",
      }
    },
    school: {
      schoolId: {
        type: Types.ObjectId,
        ref: "School",
      },
      schoolName: {
        type: String,
      }
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const User = models.User || model("User", UserSchema);


const StudentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "the name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "the email is required"],
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "must have a password"],
    },
    picture: {
      type: String,
    },
    confirmationCode: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Active"],
      required: [true, "Must have an account status"],
    },
    payment: {
      status: {
        type: Boolean,
        default: false
      },
      accessCode: {
        type: Boolean,
        default: false
      },
      paymentDate: Date,
      expirationDate: Date,
      emailSent: {
        type: Boolean,
        default: false
      },
    },
    accessCodes: {
      type: [Object],
      default: []
    },
    extraInfo: String,
    environment: {
      type: Types.ObjectId,
      ref: "Environment",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Student = models.Student || model("Student", StudentSchema);

const SectionSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "user id is required"],
      index: {
        unique: false,
      },
    },
    archived: {
      type: Boolean,
      default: false
    },
    name: String,
    sectionCode: String,
    school: {
      schoolId: {
        type: Types.ObjectId,
        ref: "School",
      },
      schoolName: {
        type: String,
      }
    },
    language: {
      type: String,
      default: "es",
      enum: ["es", "fr"]
    }
  },
  {
    versionKey: false,
  }
);

export const Section = models.Section || model("Section", SectionSchema);

const GroupSchema = new Schema(
  {
    name: String,
    SectionId: {
      type: Types.ObjectId,
      ref: "Section",
      required: [true, "Section id is required"],
      index: {
        unique: false,
      },
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "user id is required"],
      index: {
        unique: false,
      },
    },
    order: Number,
  },
  {
    versionKey: false,
  }
);

const ConversationSchema = new Schema(
  {
    name: String,
    description: String,
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "user id is required"],
      index: {
        unique: false,
      },
    },
    groupId: {
      type: Types.ObjectId,
      ref: "Group",
      required: [true, "Group id is required"],
      index: {
        unique: false,
      },
    },
    questionArray: [String],
    level: String,
    roleIA: String,
    contextIA: String,
    vocabulary: String,
    evaluationMode: Boolean,
    image: String,
    initialMessage: String,
    time: {
      type: Number,
      default: 10,
    },
    selectedVoice: {
      name: String,
      languageCode: String,
    },
    dueDate: Date,
    difficulty: {
      default: "intermedio",
      type: String,
      enum: ["básico", "intermedio"],
    },
    index: Number,
  },
  {
    versionKey: false,
  }
);