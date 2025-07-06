import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const quest = await prisma.quest.create({ data });
    return NextResponse.json(quest);
  } catch (err) {
    console.error("POST /quests error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const quests = await prisma.quest.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(quests);
}
