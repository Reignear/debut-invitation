export default function GoogleMap() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.5190972292003!2d125.5977155!3d7.5182165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32feb54245bbc14b%3A0x4d69f48592865c21!2sE%26M%20Resort%2C%20New%20Visayas!5e0!3m2!1sen!2sph!4v1760461019412!5m2!1sen!2sph"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
