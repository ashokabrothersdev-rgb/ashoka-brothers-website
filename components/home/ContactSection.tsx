"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({
      name: form.name,
      email: form.email,
      phone: form.phone,
    });
  }

  return (
    <section id="contact" className="relative min-h-[640px] overflow-hidden lg:min-h-[800px]">
      <Image
        src="/form-bg.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30 opacity-50" />

      <div className="relative mx-auto flex min-h-[640px] max-w-[1536px] items-center justify-end px-5 py-16 sm:px-10 lg:min-h-[800px] lg:px-20">
        <div className="w-full max-w-[400px] border-t border-l border-white bg-[#1d1d1d]/55 p-10 shadow-[inset_-4.5px_-4.5px_1.5px_-5.25px_rgba(255,255,255,0.5),inset_4.5px_4.5px_1.5px_-5.25px_rgba(255,255,255,0.5)] backdrop-blur-[18px]">
          <p className="font-sans text-[14px] leading-[17px] tracking-[0.7px] text-white uppercase">
            Connect
          </p>
          <h2 className="mt-2 font-display text-[32px] leading-[50px] font-light tracking-[2px] text-white uppercase sm:text-[40px] sm:leading-[60px]">
            Get in Touch
          </h2>
          <div className="mt-4 h-[3px] w-[60px] bg-white" />

          <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit}>
            <label className="flex w-full flex-col gap-1.5">
              <span className="text-[16px] leading-5 text-white">Name</span>
              <input
                name="name"
                type="text"
                placeholder="Add Name"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="h-12 w-full border border-white bg-transparent px-3.5 font-sans text-[16px] text-white italic outline-none placeholder:text-white placeholder:italic"
              />
            </label>

            <label className="flex w-full flex-col gap-1.5">
              <span className="text-[16px] leading-5 text-white">Email</span>
              <input
                name="email"
                type="email"
                placeholder="Add Email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="h-12 w-full border border-white bg-transparent px-3.5 font-sans text-[16px] text-white italic outline-none placeholder:text-white placeholder:italic"
              />
            </label>

            <label className="flex w-full flex-col gap-1.5">
              <span className="text-[16px] leading-5 text-white">Phone No.</span>
              <input
                name="phone"
                type="tel"
                placeholder="Add Number"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="h-12 w-full border border-white bg-transparent px-3.5 font-sans text-[16px] text-white italic outline-none placeholder:text-white placeholder:italic"
              />
            </label>

            <button
              type="submit"
              className="mt-2 h-10 w-[116px] border border-white bg-white text-[14px] leading-[14px] tracking-[0.7px] text-[#a87d53] uppercase transition-opacity hover:opacity-80"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
