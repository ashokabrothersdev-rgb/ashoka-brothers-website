const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056.691886767442!2d74.8697827!3d31.619205800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197b5703ac390d%3A0x789ad972866be1a!2sLoha%20Mandi!5e1!3m2!1sen!2sin!4v1791322053029!5m2!1sen!2sin";

export function MapSection() {
  return (
    <section className="bg-white px-5 py-8 sm:px-10 sm:py-10 lg:px-20 lg:py-25">
      <div className="relative mx-auto max-w-344 shadow-[0_1px_4px_rgba(0,0,0,0.16),0_8px_24px_rgba(0,0,0,0.14)]">
        <iframe
          title="Map showing Ashoka Brothers in Amritsar"
          src={mapSrc}
          className="block h-85 w-full border-0 sm:h-100"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
