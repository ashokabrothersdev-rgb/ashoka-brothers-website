"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  type ContactFormSchemaType,
} from "@/lib/contact-form.validations";

const inputClassName =
  "h-12 w-full border bg-transparent px-3.5 font-sans text-[16px] text-white italic outline-none placeholder:text-white placeholder:italic";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const phoneField = register("phone");

  function onSubmit(data: ContactFormSchemaType) {
    console.log(data);
    reset();
  }

  return (
    <section
      id="contact"
      className="relative min-h-160 overflow-hidden lg:min-h-200"
    >
      <Image
        src="/images/form-bg.webp"
        alt="Contact Form Background"
        fill
        className="object-center"
        sizes="100vw"
        priority
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/30 opacity-50" />

      <div className="relative mx-auto flex min-h-160 max-w-384 items-center justify-end px-5 py-16 sm:px-10 lg:min-h-200 lg:px-20">
        <div className="w-full max-w-100 border-t border-l border-white bg-[#ffffff]/5 p-10 shadow-[inset_-4.5px_-4.5px_1.5px_-5.25px_rgba(255,255,255,0.5),inset_4.5px_4.5px_1.5px_-5.25px_rgba(255,255,255,0.5)] backdrop-blur-[18px]">
          <h2 className="font-canela text-[28px] leading-12.5 tracking-[2px] text-white uppercase sm:text-[38px] sm:leading-15">
            Get in Touch
          </h2>

          <form
            className="mt-8 flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <label className="flex w-full flex-col gap-1.5">
              <span className="text-[16px] leading-5 text-white">Name</span>
              <input
                type="text"
                placeholder="Add Name"
                autoComplete="name"
                maxLength={50}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                className={`${inputClassName} ${errors.name ? "border-red-500" : "border-white"}`}
                {...register("name")}
              />
              {errors.name ? (
                <p
                  id="contact-name-error"
                  role="alert"
                  className="text-[13px] leading-4 text-red-500"
                >
                  {errors.name.message}
                </p>
              ) : null}
            </label>

            <label className="flex w-full flex-col gap-1.5">
              <span className="text-[16px] leading-5 text-white">Email</span>
              <input
                type="email"
                placeholder="Add Email"
                autoComplete="email"
                maxLength={50}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className={`${inputClassName} ${errors.email ? "border-red-500" : "border-white"}`}
                {...register("email")}
              />
              {errors.email ? (
                <p
                  id="contact-email-error"
                  role="alert"
                  className="text-[13px] leading-4 text-red-500"
                >
                  {errors.email.message}
                </p>
              ) : null}
            </label>

            <label className="flex w-full flex-col gap-1.5">
              <span className="text-[16px] leading-5 text-white">
                Phone No.
              </span>
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="Add Number"
                maxLength={10}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={
                  errors.phone ? "contact-phone-error" : undefined
                }
                className={`${inputClassName} ${errors.phone ? "border-red-500" : "border-white"}`}
                {...phoneField}
                onChange={(event) => {
                  event.target.value = event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                  phoneField.onChange(event);
                }}
              />
              {errors.phone ? (
                <p
                  id="contact-phone-error"
                  role="alert"
                  className="text-[13px] leading-4 text-red-500"
                >
                  {errors.phone.message}
                </p>
              ) : null}
            </label>

            <button
              type="submit"
              className="mt-2 h-10 w-29 border border-white bg-white text-[14px] leading-3.5 tracking-[0.7px] text-[#a87d53] uppercase transition-opacity hover:opacity-80"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
