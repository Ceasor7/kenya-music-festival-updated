const GoogleMap = () => {
  return (
    <div className="w-full h-96 md:h-128 lg:h-144">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.809147417323!2d36.82191247372772!3d-1.2887035356261658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11474faf9ac3%3A0xf1f72fdc90bf7b7d!2sJogoo%20House%20%22B%22!5e0!3m2!1sen!2ske!4v1722258243893!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
