function Feature({ title, description, videoSrc, isReversed }) {
  return (
    <div
      className={`flex ${
        isReversed ? "flex-row-reverse" : "flex-row"
      } gap-8 p-8 mb-12`}
    >
      <div className="w-1/2">
        <div className={`${isReversed ? "text-right" : "text-left"}`}>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="w-1/2">
        <video className="w-full rounded-lg shadow-lg" controls src={videoSrc}>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Feature;
