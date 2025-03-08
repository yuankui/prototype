import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteSession } from "@/endpoints/users/services/user.service";

export async function POST() {
  try {
    const sessionToken = cookies().get("session")?.value;
    
    if (sessionToken) {
      // Delete the session from the database
      await deleteSession(sessionToken);
    }
    
    // Delete the session cookie
    cookies().delete("session");
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Failed to logout" },
      { status: 500 }
    );
  }
}