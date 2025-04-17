export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Card wrapper */}
      <div className="max-w-lg mx-auto border p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          Contact Us
        </h1>
        <p className="mb-6 text-gray-300 text-center">
          If you have any questions or need assistance, please reach out to us
          using the form below.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-gray-200"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 bg-white border border-gray-600 rounded text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-white border border-gray-600 rounded text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 bg-white border border-gray-600 rounded text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
