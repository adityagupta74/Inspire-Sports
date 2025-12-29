import { useEffect, useState } from "react";

const Login = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // TIMER LOGIC (ONLY ADDITION)
  useEffect(() => {
    if (showOtp && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timer === 0) {
      setCanResend(true);
    }
  }, [showOtp, timer]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* MAIN WRAPPER */}
      <div className="relative flex items-center gap-10">
        
        {/* LEFT LOGO */}
        <img
  src="/logo.png"
  alt="logo"
  className="
    fixed top-6 left-6
    w-16 h-16
    rounded-full
    object-cover
    border-2 border-white
    shadow-[0_0_20px_rgba(255,255,255,0.7)]
    z-50
  "
/>

        {/* LOGIN BOX (UNCHANGED) */}
        <div
          className="
            w-[380px] p-8
            border-2 border-purple-400
            rounded-3xl
            shadow-[0_0_30px_rgba(168,85,247,0.6)]
            text-white
          "
        >
          <h2 className="
    text-center text-3xl font-[Poppins] font-semibold mb-8 tracking-wide
    text-blue-400
    drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]
    drop-shadow-[0_0_25px_rgba(59,130,246,1)]
  
  ">
            Login / Signup
          </h2>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your name"
            className="
              w-full mb-6 p-4 bg-transparent
              border-2 border-purple-400
              rounded-xl outline-none
              text-purple-300 text-lg
              placeholder-purple-400
              shadow-[0_0_20px_rgba(168,85,247,0.8)]
              focus:shadow-[0_0_35px_rgba(168,85,247,1)]
              transition
            "
          />

          {/* Phone Input */}
          <div
            className="
              flex mb-6
              border-2 border-purple-400
              rounded-xl
              shadow-[0_0_20px_rgba(168,85,247,0.8)]
              focus-within:shadow-[0_0_35px_rgba(168,85,247,1)]
              transition
            "
          >
            <div className="px-4 flex items-center text-purple-300 font-semibold">
              +91
            </div>
            <input
              type="tel"
              placeholder="Enter phone number"
              maxLength={10}
              className="
                w-full p-4 bg-transparent outline-none
                text-purple-300 text-lg
                placeholder-purple-400
              "
            />
          </div>

          {/* Send OTP Button */}
          <div className="flex justify-end">
            <button
              onClick={() => {
                setShowOtp(true);
                setTimer(60);
                setCanResend(false);
              }}
              className="
                w-14 h-14
                flex items-center justify-center
                rounded-full
                bg-purple-500
                shadow-[0_0_25px_rgba(168,85,247,0.9)]
                hover:scale-110
                transition
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </button>
          </div>

          {/* OTP SECTION */}
          {showOtp && (
            <div className="mt-8">
              <input
                type="text"
                placeholder="Enter OTP"
                maxLength={6}
                className="
                  w-full mb-4 p-4 bg-transparent
                  border-2 border-green-400
                  rounded-xl outline-none
                  text-green-300 text-lg
                  placeholder-green-400
                  shadow-[0_0_20px_rgba(34,197,94,0.8)]
                  focus:shadow-[0_0_35px_rgba(34,197,94,1)]
                  transition
                "
              />

              <button className="w-full py-3 rounded-xl bg-green-500 font-semibold hover:bg-green-600 transition">
                Verify OTP
              </button>

              {/* TIMER + RESEND */}
              <div className="mt-3 text-sm text-purple-300 text-center">
                {!canResend ? (
                  <span>Resend OTP in {timer}s</span>
                ) : (
                  <button
                    onClick={() => {
                      setTimer(60);
                      setCanResend(false);
                    }}
                    className="underline text-purple-400 hover:text-purple-200"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
