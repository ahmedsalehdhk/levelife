import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    const updated = await prisma.quest.update({ where: { id: params.id }, data });
    return NextResponse.json(updated);
  } catch (err) {
    console.error("PUT /quests/:id error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const deleted = await prisma.quest.delete({ where: { id: params.id } });
    return NextResponse.json(deleted);
  } catch (err) {
    console.error("DELETE /quests/:id error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
