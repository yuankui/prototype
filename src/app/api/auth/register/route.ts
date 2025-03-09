import { NextRequest, NextResponse } from "next/server";
import { createUser, getUserByEmail } from "@/endpoints/users/services/user.service";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 });
    }

    const user = await createUser(name || "", email, password);

    return NextResponse.json(
      { user: { id: user.id, name: user.name, email: user.email } },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
  }
}
