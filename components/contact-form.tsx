"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | string>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (res.ok) {
        setSuccess("Dankie! Ons het jou versoek ontvang. Ons sal binnekort kontak maak.");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        const data = await res.json();
        setSuccess(data?.error || "Daar was ’n probleem. Probeer weer.");
      }
    } catch {
      setSuccess("Daar was ’n fout. Probeer weer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="contact" onSubmit={onSubmit} className="max-w-3xl mx-auto bg-white/60 p-6 rounded-lg shadow-sm">
      <h4 className="text-2xl font-semibold mb-4">Kontak Ons / Kry &apos;n Kwotasie</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Naam</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <Label htmlFor="email">E-pos</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="phone">Telefoonnommer</Label>
          <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Opsioneel" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message">Boodskap</Label>
          <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-[120px]" placeholder="Vertel ons meer oor jou troeteldier en behoeftes" required />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <Button type="submit" disabled={loading}>{loading ? 'Stuur...' : "Stuur"}</Button>
        {success && <div className="text-sm text-emerald-600">{success}</div>}
      </div>

      <div className="mt-6 text-xs text-muted-foreground">Alternatiewelik, skakel ons by <a href="tel:+27123456789" className="underline">+27 12 345 6789</a> of stuur <a href="mailto:hello@pasiendehondloop.co.za" className="underline">hello@pasiendehondloop.co.za</a>.</div>
    </form>
  );
}
