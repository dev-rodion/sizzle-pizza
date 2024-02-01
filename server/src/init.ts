import dotenv from "dotenv";
import connectDB from "./db";
import { IUser } from "./interfaces";
import axios from "axios";

dotenv.config();

const users: Partial<IUser>[] = [
  {
    username: "John Doe",
    email: "test@mail.com",
    password: "password",
    passwordConfirm: "password",
    phoneNumber: "1234567890",
    address: {
      country: "Czech Republic",
      city: "Prague",
      street: "Karlovo namesti 123",
      zip: "12345",
    },
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    username: "Jane Smith",
    email: "jane.smith@mail.com",
    password: "12345Jane",
    passwordConfirm: "12345Jane",
    phoneNumber: "0987654321",
    address: {
      country: "United States",
      city: "New York",
      street: "Liberty St 456",
      zip: "10005",
    },
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    username: "Alice Johnson",
    email: "alice.j@mail.com",
    password: "alice2024",
    passwordConfirm: "alice2024",
    phoneNumber: "1122334455",
    address: {
      country: "Canada",
      city: "Toronto",
      street: "Queen St 789",
      zip: "M5H 2N2",
    },
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    username: "Mark Brown",
    email: "mark.brown@mail.com",
    password: "markbrown321",
    passwordConfirm: "markbrown321",
    phoneNumber: "1233211234",
    address: {
      country: "Australia",
      city: "Sydney",
      street: "George St 101",
      zip: "2000",
    },
    avatarUrl: "https://i.pravatar.cc/150?img=7",
  },
  {
    username: "Emily White",
    email: "emily.white@mail.com",
    password: "emilyW2024",
    passwordConfirm: "emilyW2024",
    phoneNumber: "9876543210",
    address: {
      country: "United Kingdom",
      city: "London",
      street: "Baker St 221B",
      zip: "NW1 6XE",
    },
    avatarUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    username: "Carlos Rivera",
    email: "carlos.r@mail.com",
    password: "carlosR123",
    passwordConfirm: "carlosR123",
    phoneNumber: "5566778899",
    address: {
      country: "Mexico",
      city: "Mexico City",
      street: "Paseo de la Reforma 305",
      zip: "06500",
    },
    avatarUrl: "https://i.pravatar.cc/150?img=11",
  },
];

async function createUser(user: Partial<IUser>) {
  const port = process.env.PORT || 3000;
  try {
    const response = await axios.post(`http://127.0.0.1:${port}/auth/register`, user);
    console.log(response.data);
  } catch (error: any) {
    console.log(error.response.data);
  }
}

async function seedDatabase() {
  try {
    if (!process.env.MONGO_URL) throw new Error("MONGO_URL not set");
    await connectDB(process.env.MONGO_URL);
    await Promise.all(users.map(createUser));
    console.log("Database seeded");
    process.exit(0);
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
}

seedDatabase();
