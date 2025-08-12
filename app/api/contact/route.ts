import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

type ContactRecord = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vul asseblief alle vereiste velde in." }, { status: 400 });
    }

    const dataPath = path.join(process.cwd(), "data", "contacts.json");

    // Ensure directory exists
    const dir = path.dirname(dataPath);
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch {
      // ignore
    }

    let current: ContactRecord[] = [];
    try {
      const content = await fs.readFile(dataPath, "utf8");
      current = JSON.parse(content || "[]") as ContactRecord[];
    } catch {
      current = [];
    }

    const record: ContactRecord = { id: Date.now(), name, email, phone, message, createdAt: new Date().toISOString() };
    current.push(record);

    await fs.writeFile(dataPath, JSON.stringify(current, null, 2), "utf8");

    // NOTE: In a production app you'd integrate an email service here (SendGrid, Mailgun, etc.).
    console.log("New contact submission:", record);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Interne bedienerfout." }, { status: 500 });
  }
}
