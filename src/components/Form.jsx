export default function Form() {
  return (
    <form className="relative z-20 flex flex-col items-center justify-center bg-gradient-to-br  text-white mt-80">
      <div>
        <label className="block mb-1 text-sm font-medium">full name</label>
        <input
          type="text"
          name="fullname"
          className="w-[400px] h-[50px] px-4 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-pink placeholder-white/40 mb-20 "
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Email Name</label>
        <input
          type="email"
          name="email"
          className="w-[400px] h-[50px] px-4 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-pink placeholder-white/40 mb-20"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">GitHub</label>
        <input
          type="text"
          name="GitHub"
          className="w-[400px] h-[50px] px-4 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-pink placeholder-white/40 mb-20"
          required
        />
      </div>

      <button className="w-[400px] h-[50px] mt-4 py-3 bg-[#FF6A5E] text-black font-semibold rounded-xl transition hover:bg-[#ff513f]">
        Generate my ticket
      </button>
    </form>
  );
}
