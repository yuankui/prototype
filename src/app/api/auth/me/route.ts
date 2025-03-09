import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionByToken } from "@/endpoints/users/services/user.service";

export async function GET() {
  try {
    const cookie = await cookies();
    const sessionToken = cookie.get("session")?.value;

    if (!sessionToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const session = await getSessionByToken(sessionToken);

    if (!session || new Date(session.expires) < new Date()) {
      cookie.delete("session");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { user } = session;

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Get current user error:", error);
    return NextResponse.json({ error: "Failed to get user data" }, { status: 500 });
  }
}
