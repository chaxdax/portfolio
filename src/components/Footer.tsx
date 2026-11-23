import SynapseXLogo from './SynapseXLogo'

const VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4'

export default function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Left — video */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
          <video
            src={VIDEO}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Right — text */}
        <div className="flex flex-col justify-between p-10 sm:p-16 md:w-1/2">
          {/* Top */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <SynapseXLogo size={18} className="text-white/70" />
              <span className="text-white/70 text-[15px] font-medium tracking-tight">Chandan B N</span>
            </div>
            <p className="text-white/40 text-[14px] sm:text-[15px] leading-relaxed max-w-sm">
              Aspiring cybersecurity professional. Building secure, forensic-grade systems at the intersection of cloud engineering and digital forensics.
            </p>
            <div className="flex gap-5 mt-8 text-white/35 text-[13px]">
              <a href="https://linkedin.com/in/chandan-b-n-03b545299" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">LinkedIn</a>
              <a href="https://github.com/chaxdax" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">GitHub</a>
              <a href="mailto:chandan.000@icloud.com" className="hover:text-white/70 transition-colors">Email</a>
            </div>
          </div>

          {/* Bottom */}
          <p className="text-white/25 text-[12px] mt-12">
            &copy; 2026 Chandan B N. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
